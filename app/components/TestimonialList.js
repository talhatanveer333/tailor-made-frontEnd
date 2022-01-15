import React, {useState, useEffect} from 'react';
import { FlatList } from 'react-native';

import TestimonialCard from './TestimonialCard';
import feedbacksApi from '../api/feedbacksApi';

// const testimonials=[
//     {
//         id:1,
//         name:'Talha Tanveer',
//         rating:3,
//         comment:'Excellent! This guy is awesome. He completed his work before deadline. Will surely contact you for future projects. Excellent! This guy is awesome. He completed his work before deadline. Will surely contact you for future projects.',
//         image:`https://picsum.photos/800/800?random=${Math.random() * 10}`,
//     },
//     {
//         id:2,
//         name:'Mohsin Hassan',
//         rating:4,
//         comment:'Excellent! This guy is awesome. He completed his work before deadline. Will surely contact you for future projects. Excellent! This guy is awesome. He completed his work before deadline. Will surely contact you for future projects.',
//         image:`https://picsum.photos/800/800?random=${Math.random() * 10}`,
//     },
//     {
//         id:3,
//         name:'Azad Bhai',
//         rating:5,
//         comment:'Excellent! This guy is awesome. He completed his work before deadline. Will surely contact you for future projects. Excellent! This guy is awesome. He completed his work before deadline. Will surely contact you for future projects.',
//         image:`https://picsum.photos/800/800?random=${Math.random() * 10}`,
//     },
//     {
//         id:4,
//         name:'Cappy Jani',
//         rating:3,
//         comment:'Excellent! This guy is awesome. He completed his work before deadline. Will surely contact you for future projects. Excellent! This guy is awesome. He completed his work before deadline. Will surely contact you for future projects.',
//         image:`https://picsum.photos/800/800?random=${Math.random() * 10}`,
//     }
// ]

function TestimonialList(props) {
    const [testimonials, setTestimonials]=useState([]);
    const getUserTestimonials=async()=>{
        const response=await feedbacksApi.getUserFeedbacks();
        setTestimonials(response.data);
        //console.log(response.data);
    };
    useEffect(()=>{
        getUserTestimonials();
    },[]);
    return (
        <FlatList 
        nestedScrollEnabled
        horizontal={true}
        data={testimonials}
        keyExtractor={testimonials => testimonials._id.toString()}
        renderItem={({item})=><TestimonialCard id={item._id} name={item.author} rating={item.rating} comment={item.comment} image={item.authorImage} />}
        />
    );
}

export default TestimonialList;