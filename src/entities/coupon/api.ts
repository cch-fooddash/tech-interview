import { api } from '@/shared';
import { CouponTypes } from '.';

export function findAll({ page, size }: { page: number; size: number }) {
  return api.get<CouponTypes.CommonListResponse<CouponTypes.Coupon>>(`/coupons/MEMBERSHIP`, {
    params: {
      size,
      page,
    },
  });
}

export function create(data: CouponTypes.CreateCouponRequest) {
  return api.post(`/coupons/MEMBERSHIP/register`, data);
}
