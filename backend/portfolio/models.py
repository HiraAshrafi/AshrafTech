from django.db import models


class TimeStampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Profile(TimeStampedModel):
    name = models.CharField(max_length=150)
    title = models.CharField(max_length=150)
    description = models.TextField()
    location = models.CharField(max_length=150)
    email = models.EmailField()
    phone = models.CharField(max_length=30)
    github_url = models.URLField(blank=True)
    resume = models.FileField(upload_to="resume/", blank=True)
    profile_image = models.ImageField(upload_to="profile/", blank=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Skill(TimeStampedModel):
    category = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    is_featured = models.BooleanField(default=False)
    display_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["display_order", "name"]

    def __str__(self):
        return f"{self.category}: {self.name}"


class Education(TimeStampedModel):
    period = models.CharField(max_length=50)
    degree = models.CharField(max_length=150)
    field = models.CharField(max_length=150)
    institution = models.CharField(max_length=200)
    image = models.ImageField(upload_to="education/", blank=True)
    display_order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["display_order", "-period"]

    def __str__(self):
        return f"{self.degree} - {self.institution}"


class Experience(TimeStampedModel):
    company = models.CharField(max_length=200)
    location = models.CharField(max_length=150)
    role = models.CharField(max_length=200)
    period = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    description = models.TextField()
    responsibilities = models.JSONField(default=list, blank=True)
    is_active = models.BooleanField(default=True)
    display_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["display_order", "-updated_at"]

    def __str__(self):
        return f"{self.company} - {self.role}"


class ExperiencePhoto(TimeStampedModel):
    experience = models.ForeignKey(Experience, related_name="photos", on_delete=models.CASCADE)
    image = models.ImageField(upload_to="experience/")
    alt_text = models.CharField(max_length=250)
    caption = models.CharField(max_length=150)
    display_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["display_order"]


class Project(TimeStampedModel):
    title = models.CharField(max_length=200)
    category = models.CharField(max_length=100)
    description = models.TextField()
    client = models.CharField(max_length=150)
    client_details = models.TextField(blank=True)
    technologies = models.JSONField(default=list)
    features = models.JSONField(default=list)
    google_play_url = models.URLField(blank=True)
    is_featured = models.BooleanField(default=True)
    display_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["display_order", "-updated_at"]

    def __str__(self):
        return self.title


class ProjectScreenshot(TimeStampedModel):
    project = models.ForeignKey(Project, related_name="screenshots", on_delete=models.CASCADE)
    image = models.ImageField(upload_to="projects/")
    alt_text = models.CharField(max_length=250)
    display_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["display_order"]


class Achievement(TimeStampedModel):
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=200)
    period = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    details = models.TextField()
    image = models.ImageField(upload_to="achievements/", blank=True)
    pdf = models.FileField(upload_to="achievements/", blank=True)
    is_featured = models.BooleanField(default=True)
    display_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["display_order", "-period"]

    def __str__(self):
        return self.title


class ContactMessage(TimeStampedModel):
    name = models.CharField(max_length=150)
    email = models.EmailField()
    message = models.TextField()
    is_read = models.BooleanField(default=False)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.name} - {self.email}"
