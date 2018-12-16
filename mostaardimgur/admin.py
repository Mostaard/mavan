from django.contrib import admin

# Register your models here.
from .models import ImgurImage, ImgurAlbum, ImgurSetting


class ImgurSettingAdmin(admin.ModelAdmin):
    list_display = ('setting', 'value')

admin.site.register(ImgurSetting, ImgurSettingAdmin)
# admin.site.register(ImgurAlbum)
# admin.site.register(ImgurImage)
