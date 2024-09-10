import { useCallback, useEffect, useState } from 'react';
import { CouponApi, CouponTypes } from '.';

export function useCoupons() {
  const [coupons, setCoupons] = useState<CouponTypes.Coupon[]>([]);

  const getCoupons = useCallback(async () => {
    const coupons = await CouponApi.findAll({ page: 0, size: 5 });
    setCoupons(coupons.data.contents);
  }, []);

  useEffect(() => {
    getCoupons();
  }, [getCoupons]);

  return coupons;
}

export function useCreateCoupon() {
  /**
   * TODO:
   * 쿠폰 생성하는 custom hook을 작성해주세요.
   */
}
