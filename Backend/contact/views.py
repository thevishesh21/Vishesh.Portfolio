from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import ContactMessage
from .serializers import ContactMessageSerializer

@api_view(['POST'])
def contact_view(request):
    """
    Handle POST requests to save contact form data
    
    Expects JSON with: name, email, message
    Returns: success message or error
    """
    # Validate and save data
    serializer = ContactMessageSerializer(data=request.data)
    
    if serializer.is_valid():
        # Save to database
        serializer.save()
        
        # Return success response
        return Response({
            'success': True,
            'message': 'Message sent successfully! I\'ll get back to you soon.'
        }, status=status.HTTP_201_CREATED)
    
    # Return error if validation fails
    return Response({
        'success': False,
        'message': 'Failed to send message. Please check your input.',
        'errors': serializer.errors
    }, status=status.HTTP_400_BAD_REQUEST)