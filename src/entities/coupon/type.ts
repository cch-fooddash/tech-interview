export type CommonListResponse<T> = {
  contents: T[];
  totalElements: number;
  totalPages: number;
  isLast: boolean;
};
export type DateTime = string;
export type CouponDiscountPolicyType = 'AMOUNT' | 'RATE' | 'GIFT_CARD' | 'GIFT' | 'POINT';
export type CouponStatus = 'EXPIRED' | 'USED' | 'AVAILABLE' | 'WITHDRAW';
export type Coupon = {
  id: string;
  couponId: string;
  couponNumber: string;
  couponName: string;
  value: number;
  discountPolicyType: CouponDiscountPolicyType;
  period: {
    startAt: DateTime;
    endAt: DateTime;
  };
  condition: string;
  status: CouponStatus;
  descriptionDetail?: string;
  isAvailable: boolean;
};

export type CreateCouponRequest = {
  /**
   * TODO:
   * 쿠폰을 생성하기 위한 Request body 타입이 들어가는 곳입니다.
   */
};
