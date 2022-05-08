from django.db import models
from django.conf import settings
# from accounts.models import User이렇게 하지마 

class TimestampedModel(models.Model):
    created_at =models.DateTimeField(auto_now_add=True)
    updated_at =models.DateTimeField(auto_now=True)
    class Meta:
        abstract = True #추상용도만 사용할 것이기때문에??

class Post(TimestampedModel):
    # author = models.ForeignKey(
    #     settings.AUTH_USER_MODEL, on_delete=models.CASCADE
    # )
    photo = models.ImageField(blank = True ,upload_to="notice/post/%Y/%m")
    title = models.CharField(max_length=30)
    content = models.TextField(max_length=400)

    def __str__(self):
        return self.title
    # def get_absolute_url(self):
    #     return reverse("instagram:post_detail", args=[self.pk])
    class Meta:
        ordering = ["-id"]


# Create your models here.
