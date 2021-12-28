from django.shortcuts import render
from .models import ToDoList
from django.http import HttpResponseRedirect


def index(request):
    return render(request, "base.html")


def todo(request):
    all_items = ToDoList.objects.all()
    return render(request, "base.html",
        {'all_list': all_items})


def addToDo(request):
    x = request.POST['text']
    new_item = ToDoList(text = x)
    new_item.save()
    return HttpResponseRedirect('/todo/')

