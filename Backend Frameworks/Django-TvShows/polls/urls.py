from django.conf.urls import url

from . import views

app_name = 'polls'
urlpatterns = [
    url(r'^homepage', views.IndexView.as_view(), name='index'),
    url(r'^(?P<pk>[0-9]+)/$', views.DetailView.as_view(), name='detail'),
    url(r'^(?P<pk>[0-9]+)/episode', views.DetailEpisodeView.as_view(), name='detailEpisode'),
    url(r'^(?P<pk>[0-9]+)/profile', views.ProfileView.as_view(), name='profile'),
    url(r'^(?P<episode_id>[0-9]+)/markedWatched/$', views.markedWatched, name='markedWatched'),
    url(r'^register/$', views.register, name='register'),
    url(r'^addtvshow/$', views.TvShowsView.as_view(), name='tvshowregistration')
]
