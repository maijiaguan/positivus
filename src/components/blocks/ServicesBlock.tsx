import Heading from "../Heading"
import ServiceCard, { ServiceCardProps } from "../cards/ServiceCard"

const ServicesBlock = () => {
  const services = [
    {
      type: 'secondary',
      title: ['Search engine', 'optimization'],
      image: '/images/service1.svg',
    },
    {
      type: 'tertiary',
      title: ['Pay-per-click', 'advertising'],
      image: '/images/service2.svg',
    },
    {
      type: 'primary',
      title: ['Social Media', 'Marketing'],
      image: '/images/service3.svg',
    },
    {
      type: 'secondary',
      title: ['Email', 'Marketing'],
      image: '/images/service4.svg',
    },
    {
      type: 'tertiary',
      title: ['Content', 'creation'],
      image: '/images/service5.svg',
    },
    {
      type: 'primary',
      title: ['Analytics and', 'Tracking'],
      image: '/images/service6.svg',
    }
  ] as ServiceCardProps[];
  return (
    <section className="w-full h-auto space-y-[40px] md:space-y-[80px] animate-on-scroll">
      <Heading
        type="pgreen"
        title="SERVICES"
        subTitle="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />
      <div className="w-full h-auto space-y-[30px] grid grid-cols-1 md:grid-cols-2 md:space-y-0 md:gap-[30px]">
        {
          services.map((service, i) => (
            <ServiceCard {...service} key={i} />
          ))
        }
      </div>
    </section>
  )
}
export default ServicesBlock