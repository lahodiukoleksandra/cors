from rest_framework import generics
from blog.api.permissions import AuthorModifyOrReadOnly
from blog.api.serializers import PostSerializer
from blog.models import Posts
from blog.api.permissions import AuthorModifyOrReadOnly, IsAdminUserForObject


class PostList(generics.ListCreateAPIView):
    queryset = Posts.objects.all()
    serializer_class = PostSerializer


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [AuthorModifyOrReadOnly | IsAdminUserForObject]
    queryset = Posts.objects.all()
    serializer_class = PostSerializer