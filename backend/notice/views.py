from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ModelViewSet
from .models import Post
from .serializers import PostSerializer
from django.db.models import Q


class PostViewSet(ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    #permission_class = [AllowAny] # FIXME :인증적용
    def get_serializer_context(self):
        context = super().get_serializer_context()
        context["request"] = self.request
        return context

    
    def perform_create(self, serializer):
        # post = form.save(commit=False)
        # post.author = self.request.user
        # post.save()
        serializer.save(author=self.request.user)
        return super().perform_create(serializer)