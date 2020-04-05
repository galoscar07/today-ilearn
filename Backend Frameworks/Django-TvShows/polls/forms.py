from django import forms

from polls.models import TvShow


class UserRegistrationForm(forms.Form):
    username = forms.CharField(
        required=True,
        label='Username',
        max_length=32
    )
    email = forms.CharField(
        required=True,
        label='Email',
        max_length=32,
    )
    password = forms.CharField(
        required=True,
        label='Password',
        max_length=32,
        widget=forms.PasswordInput()
    )


class TvSeriesRegistrationForm(forms.ModelForm):
    """
    nameTvShow = forms.CharField(required=True, label='Tv Show Name: ', max_length=50)
    apparitionDate = forms.DateTimeField(required=True, label='Aired Date')
    endDate = forms.DateTimeField(required=True, label='Ended Date')
    episodeDuration = forms.IntegerField(required=True, label='Duration Episode (minutes)')
    shortDescription = forms.CharField(required=True, label='Short Description', max_length=200)
    genreTvShow = forms.CharField(required=True, label='Genre', max_length=100)
    """

    class Meta:
        model = TvShow
        fields = ['nameTvShow', 'apparitionDate', 'endDate', 'episodeDuration', 'shortDescription', 'genreTvShow']