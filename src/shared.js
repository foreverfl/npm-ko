import React from 'react'
import { Link, Screenshot, ul as Ul } from './mdx'

const shared = {
  /* 사용자 로그인 */
  'user-login': {
    text: (
      <>
        npm "<Link href="https://www.npmjs.com/login">Sign In</Link>" 페이지에서 계정 정보를 입력하고{' '}
        <strong>Sign In</strong>을 클릭하세요.
      </>
    ),
    image: <Screenshot src="/shared/user-login.png" alt="npm 로그인 대화 상자의 스크린샷" />,
  },
  'contact-support': {
    text: <Link href="https://www.npmjs.com/support">npm 지원팀에 문의하세요</Link>,
  },
  'contact-enterprise-support': {
    text: <Link href="mailto:enterprise@npmjs.com">Enterprise 지원팀에 문의하세요</Link>,
  },
  'profile-settings': {
    text: (
      <>
        페이지 오른쪽 상단에서 프로필 사진을 클릭한 다음 <strong>Profile Settings</strong>를 클릭하세요.
      </>
    ),
    image: (
      <Screenshot src="/shared/profile-settings.png" alt="사용자 메뉴에서 프로필 설정 선택의 스크린샷" />
    ),
  },
  'account-settings': {
    text: (
      <>
        페이지 오른쪽 상단에서 프로필 사진을 클릭한 다음 <strong>Account</strong>를 클릭하세요.
      </>
    ),
    image: (
      <Screenshot src="/shared/account-settings.png" alt="사용자 메뉴에서 계정 설정 선택의 스크린샷" />
    ),
  },
  'start-account-recovery': {
    text: (
      <>
        "Request an Account Recovery" 페이지에서 <strong>Start Account Recovery</strong>를 클릭하세요.
      </>
    ),
    image: (
      <Screenshot
        src="/getting-started/setting-up-your-npm-user-account/request-account-recovery.png"
        alt="계정 복구 페이지를 보여주는 스크린샷"
      />
    ),
  },
  'use-recovery-code': {
    text: (
      <>
        "Two-Factor Authentication" 페이지에서 <strong>Use a recovery code or request a reset</strong>를 클릭하세요.
      </>
    ),
    image: (
      <Screenshot
        src="/getting-started/setting-up-your-npm-user-account/recovery-code-link.png"
        alt="복구 코드 입력 화면으로 이동하는 링크가 있는 보안 키 프롬프트를 보여주는 스크린샷"
      />
    ),
  },
  'support-ticket-form': {
    text: <>"Open a Support Ticket" 양식에 다음 정보를 입력하세요:</>,
  },
  'enter-email-address': {
    text: (
      <>
        <strong>Email</strong> 필드에 지원팀이 연락할 수 있는 이메일 주소를 입력하세요.
      </>
    ),
  },
  'support-ticket-other': {
    text: (
      <>
        다른 도움이 필요한 경우, <strong>How can we help?</strong> 섹션에서 <strong>Other</strong>를 선택하고 <strong>Additional Details</strong> 필드에 더 많은 정보를 입력하세요.
      </>
    ),
  },
  'connect-to-accounts': {
    text: (
      <Ul>
        <li>
          이전에 GitHub 계정을 npm 계정에 연결한 경우 <strong>Connect to GitHub</strong>를 선택하세요.
          이는 지원팀이 귀하의 계정을 확인하는 데 도움이 됩니다.
        </li>
        <li>
          이전에 Twitter 계정을 npm 계정에 연결한 경우 <strong>Connect to Twitter</strong>를 선택하세요. 이는 지원팀이 귀하의 계정을 확인하는 데 도움이 됩니다.
        </li>
      </Ul>
    ),
  },
  'submit-support-ticket': {
    text: (
      <>
        양식 하단에서 <strong>Submit Support Ticket</strong>을 클릭하세요.
      </>
    ),
  },

  /* 결제 */
  'billing-creditcard-form': {
    text: (
      <>
        신용카드 정보 대화 상자에 다음 신용카드 정보를 입력하세요:
        <Ul>
          <li>카드 번호</li>
          <li>MM / YY: 카드 만료 날짜의 월과 연도</li>
          <li>CVC: 신용카드의 3자리 코드</li>
        </Ul>
      </>
    ),
    image: <Screenshot src="/shared/billing-creditcard-form.png" alt="신용카드 양식의 스크린샷" />,
  },
  'billing-downgrade-selection': {
    text: (
      <>
        "change plan" 아래에서 <strong>Downgrade Plan</strong>을 클릭하세요.
      </>
    ),
    image: <Screenshot src="/shared/billing-downgrade-selection.png" alt="플랜 다운그레이드 버튼의 스크린샷" />,
  },
  'billing-downgrade-confirm': {
    text: (
      <>
        "Are you sure?" 아래에서 <strong>Downgrade to a free account</strong>를 클릭하세요.
      </>
    ),
    image: (
      <Screenshot src="/shared/billing-downgrade-confirm.png" alt="플랜 다운그레이드 확인의 스크린샷" />
    ),
  },
  'billing-download': {
    text: (
      <>
        단일 영수증을 다운로드하려면 다운로드하려는 영수증의 행을 찾은 다음 행 오른쪽에 있는 PDF 아이콘을 클릭하세요.
      </>
    ),
    image: <Screenshot src="/shared/billing-download-icon.png" alt="영수증 다운로드 아이콘의 스크린샷" />,
  },
  'billing-download-checked': {
    text: (
      <>
        여러 영수증을 다운로드하려면 먼저 날짜 옆의 상자를 선택하여 다운로드하려는 영수증을 선택하세요. 모든 영수증을 선택하려면 "Date" 헤더 옆의 체크박스를 선택하세요. 그런 다음 <strong>Download Checked</strong>를 클릭하세요.
      </>
    ),
    image: <Screenshot src="/shared/billing-download-checked.png" alt="선택한 항목 다운로드 옵션의 스크린샷" />,
  },
  'billing-email': {
    text: (
      <>
        단일 영수증을 이메일로 보내려면 다운로드하려는 영수증의 행을 찾은 다음 행 오른쪽에 있는 이메일 아이콘을 클릭하세요.
      </>
    ),
    image: <Screenshot src="/shared/billing-email-icon.png" alt="영수증 이메일 아이콘의 스크린샷" />,
  },
  'billing-email-checked': {
    text: (
      <>
        여러 영수증을 이메일로 보내려면 먼저 날짜 옆의 상자를 선택하여 다운로드하려는 영수증을 선택하세요. 모든 영수증을 선택하려면 "Date" 헤더 옆의 체크박스를 선택하세요. 그런 다음 <strong>Email Checked</strong>를 클릭하세요.
      </>
    ),
    image: <Screenshot src="/shared/billing-email-checked.png" alt="선택한 영수증 이메일 아이콘의 스크린샷" />,
  },
  'billing-email-receipt': {
    text: <>Email Receipt 대화 상자에서 "From", "To", "Message" 필드를 작성하세요.</>,
    image: <Screenshot src="/shared/billing-email-receipt.png" alt="이메일 영수증 대화 상자의 스크린샷" />,
  },
  'billing-extra-info': {
    text: (
      <>
        영수증에 사업자명, VAT 번호, 기록 주소 또는 기타 정보를 추가하려면 "Extra Billing Information" 텍스트 상자에 정보를 입력하세요.
      </>
    ),
    image: <Screenshot src="/shared/billing-extra-info.png" alt="추가 결제 정보 대화 상자의 스크린샷" />,
  },
  'billing-extra-receipt-email': {
    text: (
      <>
        영수증에 사용되는 이메일 주소를 업데이트하려면 "Send my receipts" 옆의 체크박스를 선택하고 결제 영수증을 받을 이메일 주소를 입력하세요.
      </>
    ),
    image: (
      <Screenshot src="/shared/billing-extra-receipt-email.png" alt="결제 영수증 이메일 설정의 스크린샷" />
    ),
  },
  'billing-extra-save': {
    text: (
      <>
        <strong>Save</strong>를 클릭하세요.
      </>
    ),
    image: <Screenshot src="/shared/billing-extra-save.png" alt="결제 추가 정보 저장 버튼의 스크린샷" />,
  },
  'billing-form': {
    text: (
      <>
        결제 정보 대화 상자에 다음 결제 정보를 입력하세요:
        <Ul>
          <li>Email: 결제 연락처로 사용되는 이메일 주소</li>
          <li>Name: 결제에 사용된 신용카드의 이름</li>
          <li>Street, City, ZIP Code, Country: 신용카드와 연결된 청구 주소</li>
        </Ul>
      </>
    ),
    image: <Screenshot src="/shared/billing-form.png" alt="결제 양식의 스크린샷" />,
  },
  'billing-history': {
    text: (
      <>
        Billing Information 페이지의 "monthly bill" 아래에서 <strong>View Billing History</strong>를 선택하세요.
      </>
    ),
    image: <Screenshot src="/shared/billing-history.png" alt="사용자 메뉴에서 결제 내역 선택의 스크린샷" />,
  },
  'billing-info': {
    text: (
      <>
        페이지 오른쪽 상단에서 프로필 사진을 클릭한 다음 <strong>Billing Info</strong>를 선택하세요.
      </>
    ),
    image: <Screenshot src="/shared/billing-info.png" alt="사용자 메뉴에서 결제 정보 선택의 스크린샷" />,
  },
  'billing-receipt-settings': {
    text: <>Billing History 대화 상자 하단에서 "Receipt Settings"를 클릭하세요.</>,
    image: <Screenshot src="/shared/billing-receipt-settings.png" alt="결제 영수증 설정의 스크린샷" />,
  },
  'billing-update-card': {
    text: (
      <>
        <strong>Update Card</strong>를 클릭하세요.
      </>
    ),
    image: (
      <Screenshot src="/shared/billing-update-card.png" alt="신용카드 업데이트 확인 버튼의 스크린샷" />
    ),
  },
  'billing-view': {
    text: (
      <>
        단일 영수증을 보려면 보려는 영수증의 행을 찾은 다음 행 오른쪽에 있는 보기 아이콘을 클릭하세요.
      </>
    ),
    image: <Screenshot src="/shared/billing-view-icon.png" alt="영수증 보기 아이콘의 스크린샷" />,
  },
  'grace-period': {
    text: '9일',
  },
  'payment-info-button': {
    text: (
      <>
        <strong>Payment Info</strong>를 클릭하세요.
      </>
    ),
    image: <Screenshot src="/shared/payment-info-button.png" alt="결제 정보 버튼의 스크린샷" />,
  },
  'payment-remember-me': {
    text: <>npm에서 다른 결제에 신용카드 정보를 저장하려면 "Remember me"를 선택하세요.</>,
    image: <Screenshot src="/shared/payment-remember-me.png" alt="결제 정보 기억하기 버튼의 스크린샷" />,
  },
  'payment-info': {
    text: (
      <>
        "monthly bill" 아래에서 <strong>Edit Payment Info</strong>를 클릭하세요.
      </>
    ),
    image: <Screenshot src="/shared/payment-info.png" alt="결제 정보 편집 링크의 스크린샷" />,
  },
  'billing-price-teams': {
    text: <>월 $7 (멤버당)</>,
  },
  'billing-organization-plans': {
    image: (
      <Screenshot src="/shared/billing-plan-selection.png" alt="결제 플랜 선택 대화 상자를 보여주는 스크린샷" />
    ),
  },

  /* 패키지 관리 */
  'organization-package-public': {
    image: <Screenshot src="/shared/organization-package-public.png" alt="공개 npm Teams 패키지의 스크린샷" />,
  },
  'organization-package-private': {
    image: (
      <Screenshot src="/shared/organization-package-private.png" alt="비공개 npm Teams 패키지의 스크린샷" />
    ),
  },

  /* 조직 */
  'organization-create': {
    text: (
      <>
        페이지 오른쪽 상단에서 프로필 사진을 클릭한 다음 <strong>Add an Organization</strong>을 클릭하세요.
      </>
    ),
    image: (
      <Screenshot src="/shared/organization-create.png" alt="조직 추가 드롭다운 메뉴의 스크린샷" />
    ),
  },
  'organization-selection': {
    text: <>왼쪽 사이드바에서 조직 이름을 클릭하세요.</>,
    image: <Screenshot src="/shared/organization-selection.png" alt="선택된 조직의 스크린샷" />,
  },
  'organization-billing-tab': {
    text: (
      <>
        조직 설정 페이지에서 <strong>Billing</strong>을 클릭하세요.
      </>
    ),
    image: <Screenshot src="/shared/organization-billing-tab.png" alt="조직 결제 탭의 스크린샷" />,
  },
  'organization-members-tab': {
    text: (
      <>
        조직 설정 페이지에서 <strong>Members</strong>를 클릭하세요.
      </>
    ),
    image: <Screenshot src="/shared/organization-members-tab.png" alt="조직 멤버 탭의 스크린샷" />,
  },
  'organization-teams-tab': {
    text: (
      <>
        조직 설정 페이지에서 <strong>Teams</strong>를 클릭하세요.
      </>
    ),
    image: <Screenshot src="/shared/organization-teams-tab.png" alt="조직 팀 탭의 스크린샷" />,
  },
}

export default shared