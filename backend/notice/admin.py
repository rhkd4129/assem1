from django.contrib import admin
from django.utils.safestring import mark_safe
from .models import Post


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ["photo_tag", "title"]
    list_display_links = ["title"]

    def photo_tag(self, post):
        return mark_safe(f"<img src={post.photo.url} style='width: 100px;' />")



