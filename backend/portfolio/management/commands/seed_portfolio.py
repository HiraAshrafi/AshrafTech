from django.core.management.base import BaseCommand

from portfolio.models import (
    Achievement,
    Education,
    Experience,
    Profile,
    Project,
    Skill,
)


class Command(BaseCommand):
    help = "Seed the CMS with the current portfolio content."

    def handle(self, *args, **options):
        Profile.objects.update_or_create(
            name="Mommad Hira Ashrafi",
            defaults={
                "title": "Software Engineer",
                "description": (
                    "Flutter and Kotlin mobile application developer with experience "
                    "building, publishing, and maintaining user-friendly apps."
                ),
                "location": "Mohammadpur, Dhaka, Bangladesh",
                "email": "ashrafiashra038@gmail.com",
                "phone": "01619005831",
                "github_url": "https://github.com/HiraAshrafi",
                "is_active": True,
            },
        )

        education_items = [
            ("2017 – 2022", "Diploma Engineering", "Computer Engineering", "National Institute Engineering"),
            ("2023", "Bachelor's Studies", "Computer Science", "Southeast University"),
        ]
        for index, (period, degree, field, institution) in enumerate(education_items):
            Education.objects.update_or_create(
                institution=institution,
                defaults={
                    "period": period,
                    "degree": degree,
                    "field": field,
                    "display_order": index,
                    "is_active": True,
                },
            )

        skills = [
            ("Mobile Development", "Flutter"),
            ("Mobile Development", "Dart"),
            ("Mobile Development", "Kotlin"),
            ("Android & Architecture", "Jetpack Compose"),
            ("Android & Architecture", "MVVM"),
            ("APIs & Data", "REST APIs"),
            ("APIs & Data", "Firebase"),
            ("Languages & Tools", "GitHub"),
        ]
        for index, (category, name) in enumerate(skills):
            Skill.objects.update_or_create(
                category=category,
                name=name,
                defaults={"is_featured": True, "display_order": index},
            )

        Experience.objects.update_or_create(
            company="Softvance IT Ltd.",
            defaults={
                "location": "Mohakhali, Dhaka",
                "role": "Mobile Application Developer (Kotlin)",
                "period": "August 2024 – Present",
                "type": "Kotlin",
                "description": "Developing and maintaining native Android applications using Kotlin and the Android SDK.",
                "responsibilities": [
                    "Building responsive Android apps with Kotlin and MVVM.",
                    "Integrating REST APIs with Retrofit and Coroutines.",
                    "Managing app data with Room Database.",
                ],
                "is_active": True,
                "display_order": 0,
            },
        )
        Experience.objects.update_or_create(
            company="Opus Technology Limited",
            defaults={
                "location": "Kakrail, Dhaka",
                "role": "Mobile Application Developer (Flutter)",
                "period": "2023 – 2024",
                "type": "Flutter",
                "description": "Developed and maintained cross-platform applications using Flutter and Dart.",
                "responsibilities": [
                    "Implemented GetX and Provider state management.",
                    "Integrated REST APIs.",
                    "Published and maintained mobile applications.",
                ],
                "is_active": True,
                "display_order": 1,
            },
        )

        projects = [
            (
                "Motive Entertainment",
                "Flutter Application",
                "A live mobile app for discovering local food and drink deals, venue atmospheres, and trending places.",
                "UK client",
                ["Flutter", "Dart", "Figma UI Implementation"],
                ["Discover local deals", "Explore venue atmosphere", "Find nearby places"],
            ),
            (
                "Journal App & Mood Tracker",
                "Flutter Application",
                "A journaling and mood tracking app designed for thoughtful daily reflection.",
                "Switzerland client",
                ["Flutter", "Dart", "Reusable Widgets"],
                ["Create journal entries", "Track moods", "Review personal insights"],
            ),
        ]
        for index, (title, category, description, client, technologies, features) in enumerate(projects):
            Project.objects.update_or_create(
                title=title,
                defaults={
                    "category": category,
                    "description": description,
                    "client": client,
                    "technologies": technologies,
                    "features": features,
                    "is_featured": True,
                    "display_order": index,
                },
            )

        achievements = [
            ("Diploma in Engineering", "Bangladesh Technical Education Board", "2021", "Academic Certificate"),
            ("Android Application Development", "Daftodi International Training Institute", "2021–2022", "Professional Certificate"),
            ("Mobile Game & Application Project", "Digital Bangladesh M Competition", "27 February 2022", "Achievement Certificate"),
            ("PHP with Laravel Framework", "PencilBox Training Institute", "18 December 2022", "Professional Certificate"),
            ("Professional English Communication", "Workplace Skills Development Academy", "20 October 2022", "Professional Certificate"),
            ("Machine Learning", "SkillUP by Simplilearn", "11 August 2021", "Online Course"),
        ]
        for index, (title, subtitle, period, category) in enumerate(achievements):
            Achievement.objects.update_or_create(
                title=title,
                defaults={
                    "subtitle": subtitle,
                    "period": period,
                    "category": category,
                    "details": f"{title} - {subtitle}.",
                    "is_featured": True,
                    "display_order": index,
                },
            )

        self.stdout.write(self.style.SUCCESS("Portfolio CMS content seeded successfully."))
