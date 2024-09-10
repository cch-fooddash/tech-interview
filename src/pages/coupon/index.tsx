import { CouponHooks } from '@/entities/coupon';
import { CouponCard, CreateCouponDialog } from '@/features/coupon';
import { Component } from '@/shared';

/**
 * TODO:
 * 이외에 더 필요해보이거나 수정하고 싶은 부분이 있다면
 * 면접자님의 의도에 따라 수정해주세요
 */

function Coupons() {
  const coupons = CouponHooks.useCoupons();

  return (
    <div>
      <Component.Header></Component.Header>
      <div className="p-8 flex justify-between items-center">
        <Component.Typo font="title">쿠폰목록</Component.Typo>
        <CreateCouponDialog.UI />
      </div>
      <div className="px-4 flex flex-col gap-4">
        {coupons.map((item) => (
          <CouponCard.UI coupon={item} />
        ))}
      </div>
    </div>
  );
}

export default Coupons;
