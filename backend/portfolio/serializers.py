from rest_framework import serializers
from .models import Achievement, ContactMessage, Education, Experience, Profile, Project, Skill


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = "__all__"


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = "__all__"


class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = "__all__"


class ExperienceSerializer(serializers.ModelSerializer):
    photos = serializers.SerializerMethodField()

    class Meta:
        model = Experience
        fields = "__all__"

    def get_photos(self, obj):
        request = self.context.get("request")
        return [
            {"src": request.build_absolute_uri(p.image.url), "alt": p.alt_text, "caption": p.caption}
            for p in obj.photos.all()
        ]


class ProjectSerializer(serializers.ModelSerializer):
    screenshots = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = "__all__"

    def get_screenshots(self, obj):
        request = self.context.get("request")
        return [
            {"src": request.build_absolute_uri(p.image.url), "alt": p.alt_text}
            for p in obj.screenshots.all()
        ]


class AchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Achievement
        fields = "__all__"


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ["id", "name", "email", "message", "created_at"]
        read_only_fields = ["id", "created_at"]
