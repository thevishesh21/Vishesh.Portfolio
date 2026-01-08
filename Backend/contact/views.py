from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from .models import ContactMessage
from .serializers import ContactMessageSerializer


@api_view(['POST'])
@permission_classes([AllowAny])  # 🔑 THIS IS REQUIRED
def contact_view(request):
    """
    Handle POST requests to save contact form data

    Expects JSON with: name, email, message
    Returns: success message or error
    """

    serializer = ContactMessageSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

        return Response(
            {
                "success": True,
                "message": "Message sent successfully! I'll get back to you soon."
            },
            status=status.HTTP_201_CREATED
        )

    return Response(
        {
            "success": False,
            "message": "Failed to send message. Please check your input.",
            "errors": serializer.errors
        },
        status=status.HTTP_400_BAD_REQUEST
    )
print("CONTACT VIEWS LOADED")
