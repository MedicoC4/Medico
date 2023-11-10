import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import StarRating from 'react-native-star-rating';
import React, { useState } from 'react';

const ReviewInput = () => {
  const [reviews, setReviews] = useState('');
  const [rating, setRating] = useState(0);

  const submitReview = () => {
    // Submit the review and rating...
  };

  return (
    <View style={styles.reviewInputCard}>
      <TextInput
        style={styles.reviewInput}
        placeholder="Write a review..."
        value={reviews}
        onChangeText={setReviews}
      />
      <StarRating
        disabled={false}
        maxStars={5}
        rating={rating}
        selectedStar={setRating}
        fullStarColor="gold"
      />
      <Button title="Submit" onPress={submitReview} />
    </View>
  );
};

const styles = StyleSheet.create({
    reviewInputCard: {
        backgroundColor: '#f8f8f8',
        padding: 10,
        marginVertical: 5,
        borderRadius: 20, // Increase this value
        borderWidth: 1,
        borderColor: '#ddd',
        width: '100%',
        alignSelf: 'center',
      },
      reviewInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 10, // Add this line
      },
});

export default ReviewInput;