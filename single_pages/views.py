from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, "index.html")

def jobList(request):
    return render(request, "subPage_jobList.html")

def jobInterest(request):
    return render(request, "subPage_jobInterest.html")

def jobExperience(request):
    return render(request, "subPage_jobExperience.html")

def futureJob(request):
    return render(request, "futureJob/future_job.html")

def futureJobSkill(request):
    return render(request, "futureJob/future_job_skill.html")

def futureJobMedia(request):
    return render(request, "futureJob/future_job_media.html")

def jobex(request):
    return render(request, "subPage_jobe.html")

def joby(request):
    return render(request, "subPage_joby.html")