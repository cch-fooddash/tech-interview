import { CouponTypes } from '.';

export const couponStatusMap: Record<CouponTypes.CouponStatus, string> = {
  AVAILABLE: '사용가능',
  EXPIRED: '만료됨',
  USED: '사용완료',
  WITHDRAW: '회수됨',
};
