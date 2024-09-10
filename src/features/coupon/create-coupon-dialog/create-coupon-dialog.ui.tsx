import { Component } from '@/shared';

function CreateCouponDialog() {
  /**
   * TODO:
   * 쿠폰을 생성하기 위한 Dialog를 완성시켜주세요!
   * Dialog 컴포넌트는 /shared/ui에 정의되어있습니다.
   */
  return (
    <Component.Dialog.Wrapper>
      <Component.Dialog.Trigger variant="secondary" size="small" shape="circular" hasShadow>
        <p className=" font-bold">쿠폰등록하기</p>
      </Component.Dialog.Trigger>
      <Component.Dialog.Content></Component.Dialog.Content>
    </Component.Dialog.Wrapper>
  );
}

export default CreateCouponDialog;
