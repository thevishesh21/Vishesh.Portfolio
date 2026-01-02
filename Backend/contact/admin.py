from django.contrib import admin
from .models import ContactMessage

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    """
    Admin interface for viewing contact messages
    """
    list_display = ['name', 'email', 'created_at']
    list_filter = ['created_at']
    search_fields = ['name', 'email', 'message']
    readonly_fields = ['created_at']
    
    # Makes the admin panel read-only (can't edit messages)
    def has_add_permission(self, request):
        return False
    
    def has_change_permission(self, request, obj=None):
        return False