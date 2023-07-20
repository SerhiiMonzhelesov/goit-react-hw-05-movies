import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { requestReviews } from 'services/Api';
import { Loader } from 'components/Loader/Loader';
import { ReviewList } from 'components/ReviewList/ReviewList';

function Reviews() {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoadimg] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoadimg(true);
        const dataReviews = await requestReviews(id);
        setReviews(dataReviews);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoadimg(false);
      }
    };
    fetchReviews();
  }, [id]);

  return (
    <>
      {isLoading && <Loader />}
      {reviews && reviews.length > 0 ? (
        <ReviewList reviews={reviews} />
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
}

export default Reviews;
