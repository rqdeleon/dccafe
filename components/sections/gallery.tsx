"use client"
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";

import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const tabContent = [
    {
      tabValue: "all",
      images:[
        {
          source: './images/Gallery/dish1.jpg',
          divStyle: 'col-span-1 md:col-span-1 md:row-span-2',
        },
        {
          source: './images/Gallery/foodtwo.jpg',
          divStyle: 'col-span-1 md:col-span-2',
        },
        {
          source: './images/Gallery/dish2.jpg',
          divStyle: '',
        },
        {
          source: './images/Gallery/dish5.jpg',
          divStyle: '',
        },
      ]
    },
    {
      tabValue: "filipino",
      images:[
        {
          source: './images/Gallery/dish1.jpg',
          divStyle: 'col-span-1 md:col-span-1 md:row-span-2',
        },
        {
          source: './images/Gallery/dish3.jpg',
          divStyle: '',
        },
        {
          source: './images/Gallery/dish4.jpg',
          divStyle: 'col-span-1 md:col-span-1 md:row-span-2',
        },
        {
          source: './images/Gallery/dish5.jpg',
          divStyle: '',
        },
      ]
    },
    {
      tabValue: "burger",
      images:[
        {
          source: './images/Gallery/burger1.jpg',
          divStyle: 'col-span-1 md:col-span-1 md:row-span-2',
        },
        {
          source: './images/Gallery/burger2.jpg',
          divStyle: '',
        },
        {
          source: './images/Gallery/foodfour.jpg',
          divStyle: 'col-span-1 md:col-span-1 md:row-span-2',
        },
        {
          source: './images/Gallery/bbq.jpg',
          divStyle: '',
        },
      ]
    },
    {
      tabValue: "pizza",
      images:[
        {
          source: './images/Gallery/pizza.jpg',
          divStyle: 'col-span-1 md:col-span-1 md:row-span-2',
        },
        {
          source: './images/Gallery/pizza2.jpg',
          divStyle: '',
        },
        {
          source: './images/Gallery/pizza3.jpg',
          divStyle: 'col-span-1 md:col-span-1 md:row-span-2',
        },
        {
          source: './images/Gallery/bbq.jpg',
          divStyle: '',
        },
      ]
    },
    {
        tabValue: "desserts",
        images:[
          {
            source: './images/Gallery/dessert1.jpg',
            divStyle: 'col-span-1 md:col-span-1 md:row-span-2',
          },
          {
            source: './images/Gallery/dessert2.jpg',
            divStyle: '',
          },
          {
            source: './images/Gallery/dessert3.jpg',
            divStyle: 'col-span-1 md:col-span-1 md:row-span-2',
          },
          {
            source: './images/Gallery/dessert4.jpg',
            divStyle: '',
          },
        ]
      },
      {
        tabValue: "drinks",
        images:[
          {
            source: './images/Gallery/drink1.jpg',
            divStyle: 'col-span-1 md:col-span-1 md:row-span-2',
          },
          {
            source: './images/Gallery/drink1.jpg',
            divStyle: '',
          },
          {
            source: './images/Gallery/drinks4.jpg',
            divStyle: 'col-span-1 md:col-span-1 md:row-span-2',
          },
          {
            source: './images/Gallery/foodfour.jpg',
            divStyle: '',
          },
        ]
      },
  ]

const Gallery = () => {
    return (
        <section>
        <div id="gallery-section">
            <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 mt-20 md:pt-24'>
                <div className="text-center">
                    <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                        <h2 className='text-pink text-lg font-normal mb-3 tracking-widest uppercase ls-51'>Our Gallery</h2>
                    </Fade>
                    <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                        <h3 className="text-3xl lg:text-5xl font-semibold text-black">
                            Gallery of our cooked food.
                        </h3>
                    </Fade>

                </div>

                <div className="container mx-auto px-4 ">
                    <Tabs defaultValue="all">
                        <TabsList className="flex gap-4 bg-transparent my-8 md:mb-3">
                            <TabsTrigger value="all" >All</TabsTrigger>
                            <TabsTrigger value="filipino" >Filipino Signiture Dish</TabsTrigger>
                            <TabsTrigger value="burger" >Burger</TabsTrigger>
                            <TabsTrigger value="pizza" >Pizza</TabsTrigger>
                            <TabsTrigger value="desserts" >Desserts</TabsTrigger>
                            <TabsTrigger value="drinks" >Drinks</TabsTrigger>
                        </TabsList>
                        <div className="pt-4">
                        {
                            tabContent.map((tab)=>(
                            <TabsContent key={tab.tabValue} value={tab.tabValue} >
                                <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-3 gap-4 max-h-[550px]">
                                {tab.images.map((img)=>(
                                    <div key={img.source} className={cn('relative overflow-hidden',img.divStyle)}>
                                    <img loading="lazy" src={img.source} alt="Image 1" className="object-cover w-full h-full rounded-lg shadow-md" />
                                    </div>
                                ))}
                                </div>
                            </TabsContent>
                            ))
                        }

                        </div>
  
                    </Tabs>
                </div>

            </div>
        </div>
        </section>

    )
}

export default Gallery;
