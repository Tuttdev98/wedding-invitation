export interface CoupleInfo {
  bride: {
    fullName: string;
    shortName: string;
    role: string;
    parentsPlaceholder: string;
    descriptionPlaceholder: string;
  };
  groom: {
    fullName: string;
    shortName: string;
    role: string;
    parentsPlaceholder: string;
    descriptionPlaceholder: string;
  };
  weddingDate: string; // ISO date string or formatted date
  weddingTime: string;
  venue: {
    name: string;
    address: string;
    ward: string;
    city: string;
    province: string;
    fullAddress: string;
    googleMapsUrl: string;
  };
  invitationMessage: string;
}

export interface TimelineItem {
  time: string;
  title: string;
  description: string;
  iconName: string;
}

export interface GuestWish {
  id: string;
  senderName: string;
  relationship: string;
  message: string;
  createdAt: string;
}

export interface RsvpSubmission {
  id: string;
  guestName: string;
  phone: string;
  attendance: 'attending' | 'not_attending';
  partySize: number;
  dietaryPreference: 'standard' | 'vegetarian';
  wishes?: string;
  submittedAt: string;
}
