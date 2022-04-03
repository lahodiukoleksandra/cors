from django.db import models

# Create your models here.
from django.db.models import Model


class Posts(Model):
    slug = models.SlugField(unique=True)