from django.contrib import admin

from .models import (
    Achievement,
    ContactMessage,
    Education,
    Experience,
    ExperiencePhoto,
    Profile,
    Project,
    ProjectScreenshot,
    Skill,
)


admin.site.site_header = "Hira Ashrafi Portfolio CMS"
admin.site.site_title = "Portfolio CMS"
admin.site.index_title = "Content Management"


class ExperiencePhotoInline(admin.TabularInline):
    model = ExperiencePhoto
    extra = 1


class ProjectScreenshotInline(admin.TabularInline):
    model = ProjectScreenshot
    extra = 1


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ("name", "title", "location", "is_active", "updated_at")
    list_filter = ("is_active",)
    search_fields = ("name", "title", "email")


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ("name", "category", "is_featured", "display_order")
    list_filter = ("category", "is_featured")
    search_fields = ("name", "category")
    list_editable = ("is_featured", "display_order")


@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = ("degree", "institution", "period", "is_active", "display_order")
    list_filter = ("is_active",)
    search_fields = ("degree", "field", "institution")
    list_editable = ("display_order",)


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ("company", "role", "period", "type", "is_active", "display_order")
    list_filter = ("is_active", "type")
    search_fields = ("company", "role", "location")
    inlines = [ExperiencePhotoInline]
    list_editable = ("display_order",)


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ("title", "category", "client", "is_featured", "display_order")
    list_filter = ("is_featured", "category")
    search_fields = ("title", "client", "description")
    inlines = [ProjectScreenshotInline]
    list_editable = ("is_featured", "display_order")


@admin.register(Achievement)
class AchievementAdmin(admin.ModelAdmin):
    list_display = ("title", "category", "period", "is_featured", "display_order")
    list_filter = ("category", "is_featured")
    search_fields = ("title", "subtitle", "details")
    list_editable = ("is_featured", "display_order")


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "is_read", "created_at")
    list_filter = ("is_read", "created_at")
    search_fields = ("name", "email", "message")
    readonly_fields = ("created_at", "updated_at")
