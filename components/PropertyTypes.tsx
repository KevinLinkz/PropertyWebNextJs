import PropertyTypesDiv from './microComponents/PropertyTypesDiv'
import AnimatedAOS from '@components/AnimatedAOS'

const datas = [
    {
        "id": 1,
        "title": "Apartment",
        "desc": "123 Properties",
        "img-url": "/img/icon-apartment.png"
    },
    {
        "id": 2,
        "title": "Vila",
        "desc": "123 Properties",
        "img-url": "/img/icon-villa.png"
    },
    {
        "id": 3,
        "title": "Home",
        "desc": "123 Properties",
        "img-url": "/img/icon-house.png"
    },
    {
        "id": 4,
        "title": "Office",
        "desc": "123 Properties",
        "img-url": "/img/icon-housing.png"
    },
    {
        "id": 5,
        "title": "Building",
        "desc": "123 Properties",
        "img-url": "/img/icon-building.png"
    },
    {
        "id": 6,
        "title": "Townhouse",
        "desc": "123 Properties",
        "img-url": "/img/icon-neighborhood.png"
    },
    {
        "id": 7,
        "title": "Shop",
        "desc": "123 Properties",
        "img-url": "/img/icon-condominium.png"
    },
    {
        "id": 8,
        "title": "Garage",
        "desc": "123 Properties",
        "img-url": "/img/icon-luxury.png"
    }
]

const PropertyTypes = () => {
    return (
        <AnimatedAOS className="" data-aos="fade-up" data-aos-once="false" data-aos-duration="500" data-aos-easing="ease-in-out">
            <section id='PropertyTypes' className=' w-full h-full flex flex-col justify-center items-center py-14 '>
                <h1 className={`text-4xl font-bold my-5`}>Property Types</h1>
                <p className={`w-[45%] text-center text-stone-500 mb-12`}>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>


                <div className=' grid lg:grid-cols-4  md:grid-cols-3  sm:grid-cols-2  grid-rows-2 w-full gap-5 p-5'>
                    {datas.map((data, i) => {
                        return (
                            <PropertyTypesDiv key={`property-types-${data.id}`} id={data.id} title={data.title} desc={data.desc} url={data['img-url']} />
                        )

                    })}

                </div>

            </section>

        </AnimatedAOS>
    )
}

export default PropertyTypes