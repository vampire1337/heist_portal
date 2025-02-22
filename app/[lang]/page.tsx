import { useTranslation } from '../../i18n/server';
import Hero from '~/components/widgets/Hero';
import SocialProof from '~/components/widgets/SocialProof';
import Features from '~/components/widgets/Features';
import Content from '~/components/widgets/Content';
import Steps from '~/components/widgets/Steps';
import Testimonials from '~/components/widgets/Testimonials';
import FAQs2 from '~/components/widgets/FAQs2';
import Pricing from '~/components/widgets/Pricing';
import Team from '~/components/widgets/Team';
import Contact from '~/components/widgets/Contact';
import CallToAction2 from '~/components/widgets/CallToAction2';

import {
  heroHome,
  socialProofHome,
  featuresHome,
  contentHomeOne,
  contentHomeTwo,
  stepsHome,
  testimonialsHome,
  faqs2Home,
  pricingHome,
  teamHome,
  contactHome,
  callToAction2Home,
} from '~/shared/data/pages/home.data';

export default async function Page({ params: { lang } }: { params: { lang: string } }) {
  const { t } = await useTranslation(lang, 'common');

  return (
    <>
      <Hero {...heroHome} />
      <SocialProof {...socialProofHome} />
      <Features {...featuresHome} />
      <Content {...contentHomeOne} />
      <Content {...contentHomeTwo} />
      <Steps {...stepsHome} />
      <Testimonials {...testimonialsHome} />
      <FAQs2 {...faqs2Home} />
      <Pricing {...pricingHome} />
      <Team {...teamHome} />
      <Contact {...contactHome} />
      <CallToAction2 {...callToAction2Home} />
    </>
  );
} 