from rest_framework.routers import DefaultRouter
from .views import (
    AchievementViewSet,
    ContactMessageViewSet,
    EducationViewSet,
    ExperienceViewSet,
    ProfileViewSet,
    ProjectViewSet,
    SkillViewSet,
)

router = DefaultRouter()
router.register("profile", ProfileViewSet, basename="profile")
router.register("skills", SkillViewSet, basename="skills")
router.register("education", EducationViewSet, basename="education")
router.register("experience", ExperienceViewSet, basename="experience")
router.register("projects", ProjectViewSet, basename="projects")
router.register("achievements", AchievementViewSet, basename="achievements")
router.register("contact", ContactMessageViewSet, basename="contact")

urlpatterns = router.urls
