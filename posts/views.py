from django.shortcuts import render,redirect

def login_page(request):
    print(request)
    html = "Django Form"
    context = {
    "title":html,
    }
    return render(request,'post/_login.html',context)
    



