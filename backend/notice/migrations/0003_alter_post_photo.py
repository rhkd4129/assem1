# Generated by Django 4.0.3 on 2022-05-08 06:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notice', '0002_alter_post_photo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='photo',
            field=models.ImageField(blank=True, upload_to='notice/post/%Y/%m'),
        ),
    ]