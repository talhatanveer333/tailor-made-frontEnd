import React, {useState, useEffect} from 'react';
import { FlatList } from 'react-native';

import TestimonialCard from './TestimonialCard';
import feedbacksApi from '../api/feedbacksApi';
import AppText from './AppText';
import colors from '../config/colors';
import fonts from '../config/fonts';


function TestimonialList({userId}) {
    const [testimonials, setTestimonials]=useState([]);
    const getUserTestimonials=async()=>{
        const response=await feedbacksApi.getUserFeedbacks(userId);
        setTestimonials(response.data);
        //console.log(response.data);
    };
    useEffect(()=>{
        getUserTestimonials();
    },[]);
if(testimonials.length>0)
    return (
        <FlatList 
        nestedScrollEnabled
        horizontal={true}
        data={testimonials}
        keyExtractor={testimonial=>testimonial._id.toString()}
        renderItem={({item})=><TestimonialCard id={item._id} name={item.author.name} rating={item.rating} authorRating={item.author.rating} comment={item.comment} image={item.author.imageUrl} />}
        />
    );
    return (
        <AppText text={`No testimonials found.`} color={colors.danger} fontSize={fonts.fontSize.text} alignSelf='center' />
    );
}

export default TestimonialList;