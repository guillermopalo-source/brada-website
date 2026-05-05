import { useRef } from 'react';
import ScrollReveal from '@/components/custom/ScrollReveal';
import imgBranding from '@/assets/skills_img/branding_title.gif';
import imgExperience from '@/assets/skills_img/experience_title.png';
import imgContent from '@/assets/skills_img/content_title.png';
import imgSocial from '@/assets/skills_img/social_title.png';

interface SkillCategory {
  title: string;
  titleImage: string;
  imageWidth: number;
  imageHeight: number;
  items: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Branding',
    titleImage: imgBranding,
    imageWidth: 400,
    imageHeight: 227,
    items: ['Strategy', 'Creative Direction', 'Storytelling', 'Visual Language'],
  },
  {
    title: 'Brand Experience',
    titleImage: imgExperience,
    imageWidth: 400,
    imageHeight: 227,
    items: ['Events', 'Activations', 'Guerrilla', 'Internal Marketing'],
  },
  {
    title: 'Media Content',
    titleImage: imgContent,
    imageWidth: 400,
    imageHeight: 227,
    items: ['Film Production', 'Photography', 'Animation', 'Content Creation'],
  },
  {
    title: 'Social Media',
    titleImage: imgSocial,
    imageWidth: 400,
    imageHeight: 227,
    items: ['Strategy', 'Campaigns', 'Community Mgmt', 'Copywriting'],
  },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative w-full pt-12 pb-24 sm:pt-20 sm:pb-32 bg-transparent overflow-hidden"
    >
      <div className="w-full relative z-10 transition-colors duration-500 ease-expo-out">
        <div className="w-full flex flex-col items-start md:items-center">

          {/* Header Node */}
          <ScrollReveal>
            <div className="relative mb-16 md:mb-24">
              <div className="relative flex items-start justify-start md:items-center md:justify-center pt-8 pb-6 px-4 md:px-12">
                {/* Image Background */}
                <img
                  src="/images/skills_img/resaltar_skills.png"
                  alt=""
                  className="absolute inset-0 w-full h-full object-contain dark:invert-0 [.light_&]:invert"
                />
                <h2 className="text-5xl md:text-6xl text-foreground font-accent relative z-10 pb-2">SKILLS</h2>
              </div>
            </div>
          </ScrollReveal>

          {/* Grid & Arrows Container */}
          <div className="relative w-full">

            {/* Connecting Arrows (Desktop Only) */}
            <ScrollReveal delay={300}>
              <div className="hidden lg:block absolute top-[-100px] left-0 w-full h-[140px] pointer-events-none">
                <div className="relative w-full h-full">
                  {/* Arrow 1 to Branding */}
                  <img
                    src="/images/skills_img/flecha_branding.png"
                    alt=""
                    className="absolute left-[24%] top-[-42%] h-[115%] w-auto object-contain -translate-x-[50%] origin-top rotate-[0deg] dark:invert-0 [.light_&]:invert"
                  />

                  {/* Arrow 2 to Brand Experience */}
                  <img
                    src="/images/skills_img/flecha_brand-experience.png"
                    alt=""
                    className="absolute left-[39%] top-[8%] h-[70%] w-auto object-contain -translate-x-[50%] dark:invert-0 [.light_&]:invert"
                  />

                  {/* Arrow 3 to Media Content */}
                  <img
                    src="/images/skills_img/flecha_media-content.png"
                    alt=""
                    className="absolute right-[42%] top-[8%] h-[70%] w-auto object-contain translate-x-[50%] dark:invert-0 [.light_&]:invert"
                  />

                  {/* Arrow 4 to Social Media */}
                  <img
                    src="/images/skills_img/flecha_social-media.png"
                    alt=""
                    className="absolute right-[calc(22%+70px)] top-[-45%] h-[120%] w-auto object-contain translate-x-[50%] rotate-[0deg] dark:invert-0 [.light_&]:invert"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* 4 Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 px-4 md:px-0 mt-[48px]">
              {skillCategories.map((category, index) => (
                <ScrollReveal key={category.title} delay={index * 100}>
                  <div className="flex flex-col items-start md:items-center space-y-4">

                    {/* Title Image — natural size, no filters, container matches image proportions */}
                    <img
                      src={category.titleImage}
                      alt={category.title}
                      width={category.imageWidth}
                      height={category.imageHeight}
                      className="block max-w-full h-auto"
                    />

                    {/* Items List */}
                    <div className="flex flex-col items-start text-left space-y-1 w-full">
                      <ul className="flex flex-col items-start gap-0">
                        {category.items.map((item) => (
                          <li key={item} className="font-inter text-lg md:text-xl font-normal leading-[0.65] tracking-[0.03em] pb-1 text-gray-400 dark:text-brada-light/70 m-0">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;