// config.js - Dynamic referral verification linked to vendor dashboard
const CONFIG = {
    get validReferralCodes() {
        const stored = localStorage.getItem('shuttle_referral_codes');
        if (stored) {
            return JSON.parse(stored);
        }
        return ["JohnDoe", "ShuttlePro2026", "BadmintonKing", "UTARStaff", "SmashFest"];
    },
    discountPerP02: 2.00 // RM2 discount per P02 ordered if valid referral code is used
};