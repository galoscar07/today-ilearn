# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth.mixins import LoginRequiredMixin
from django.forms import forms, modelformset_factory
from django.http import HttpResponseRedirect
from django.shortcuts import get_object_or_404
from django.urls import reverse
from django.views import generic
from django.views.generic import FormView

from polls import models
from polls.forms import UserRegistrationForm, TvSeriesRegistrationForm
from .models import TvShow, Episode, EpisodeUser
from django.contrib.auth import login, authenticate
from django.shortcuts import render


class IndexView(LoginRequiredMixin, generic.ListView):
        template_name = "polls/index.html"
        context_object_name = 'latestShowsList'

        def get_queryset(self):
            return TvShow.objects.all()


class DetailView(LoginRequiredMixin, generic.DetailView):
    model = TvShow
    template_name = "polls/details.html"


class DetailEpisodeView(LoginRequiredMixin, generic.DetailView):
    model = Episode
    template_name = "polls/detailsEpisode.html"


class ProfileView(LoginRequiredMixin, generic.DetailView):
    model = User
    template_name = "polls/profile.html"


class TvShowsView(FormView):
    template_name = 'polls/addTvShow.html'
    form_class = TvSeriesRegistrationForm
    success_url = '/homepage'

    def form_valid(self, form):
        form.save()
        return super().form_valid(form)


def register(request):
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            userObj = form.cleaned_data
            username = userObj['username']
            email = userObj['email']
            password = userObj['password']
            if not (User.objects.filter(username=username).exists() or User.objects.filter(email=email).exists()):
                User.objects.create_user(username, email, password)
                user = authenticate(username=username, password=password)
                login(request, user)
                return HttpResponseRedirect('/homepage')
            else:
                raise forms.ValidationError('Looks like a username with that email or password already exists')
    else:
        form = UserRegistrationForm()
    return render(request, 'polls/signup.html', {'form': form})


def markedWatched(request, episode_id):
    episode = get_object_or_404(Episode, pk=episode_id)
    binding = EpisodeUser(user=request.user, episode=episode)
    episodes = request.user.episode.all()
    ok = 0
    for epi in episodes:
        if epi == episode:
            messages.error(request, 'You already watched this episode')
            ok = 1
            break
    if ok == 0:
        binding.save()
    return HttpResponseRedirect(reverse('polls:detailEpisode', args=(episode.id,)))


#import pdb;
#pdb.set_trace()