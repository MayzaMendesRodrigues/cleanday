import './ReviewsSection.css'
import ReviewCard from './ReviewCard/ReviewCard'
import { useData } from '../../../../context/DataContext'

const ReviewsSection: React.FC = () => {
  const { data } = useData();
  const { reviews, isLoading, error } = data;

  if (isLoading || error || !reviews.length || reviews.length === 0) {
    return <br />
  }

  const reviewsSet = reviews.slice(0, 9);

  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <div className="section-title">
          <h2>Lo que dicen nuestras clientas</h2>
        </div>
        <div className="reviews-grid">
          {reviewsSet.map((review, index) => (
            <ReviewCard review={review} key={index} />
          ))}
        </div>
      </div>
    </section >
  )
};

export default ReviewsSection;
