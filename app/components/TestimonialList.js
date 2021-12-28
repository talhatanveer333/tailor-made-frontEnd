import React from 'react';
import { FlatList } from 'react-native';

import TestimonialCard from './TestimonialCard';

const testimonials=[
    {
        id:1,
        name:'Talha Tanveer',
        rating:3,
        comment:'Excellent! This guy is awesome. He completed his work before deadline. Will surely contact you for future projects. Excellent! This guy is awesome. He completed his work before deadline. Will surely contact you for future projects.',
        image:`https://picsum.photos/200/300?random=${Math.random() * 10}`,
    },
    {
        id:2,
        name:'Mohsin Hassan',
        rating:4,
        comment:'Excellent! This guy is awesome. He completed his work before deadline. Will surely contact you for future projects. Excellent! This guy is awesome. He completed his work before deadline. Will surely contact you for future projects.',
        image:`https://picsum.photos/200/300?random=${Math.random() * 10}`,
    },
    {
        id:3,
        name:'Azad Bhai',
        rating:5,
        comment:'Excellent! This guy is awesome. He completed his work before deadline. Will surely contact you for future projects. Excellent! This guy is awesome. He completed his work before deadline. Will surely contact you for future projects.',
        image:`https://picsum.photos/200/300?random=${Math.random() * 10}`,
    },
    {
        id:4,
        name:'Cappy Jani',
        rating:3,
        comment:'Excellent! This guy is awesome. He completed his work before deadline. Will surely contact you for future projects. Excellent! This guy is awesome. He completed his work before deadline. Will surely contact you for future projects.',
        image:`https://picsum.photos/200/300?random=${Math.random() * 10}`,
    }
]

function TestimonialList(props) {
    return (
        <FlatList 
        nestedScrollEnabled
        horizontal={true}
        data={testimonials}
        keyExtractor={testimonials => testimonials.id.toString()}
        renderItem={({item})=><TestimonialCard id={item.id} name={item.name} rating={item.rating} comment={item.comment} image={item.image} />}
        />
    );
}

export default TestimonialList;