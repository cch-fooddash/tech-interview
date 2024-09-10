import { CouponTypes } from '@/entities/coupon';

type CouponCardProps = {
  coupon: CouponTypes.Coupon;
};

function CouponCard({ coupon }: CouponCardProps) {
  /**
   * TODO:
   * coupon Response를 활용해서 쿠폰 카드를 만들어 주세요!
   * 날짜 관련 필요한 함수는 /shared/date 에 정의되어 있습니다.
   */
  return <div className="w-full shadow rounded-lg flex justify-between"></div>;
}

export default CouponCard;
