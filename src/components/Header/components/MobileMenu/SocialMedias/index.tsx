import React from 'react';
import FacebookIcon from '../../../../../assets/icon/Facebook';
import InstagramIcon from '../../../../../assets/icon/Instagram';
import LinkedinIcon from '../../../../../assets/icon/Linkedin';
import TikTokIcon from '../../../../../assets/icon/TikTok';
import YoutubeIcon from '../../../../../assets/icon/Youtube';
import { Link } from '../../../../shared/Link';

export function SocialMedias() {
  return (
    <address className="not-italic w-full flex flex-col items-start gap-2">
      <span className="text-sm font-semibold text-text-secondary">Follow us</span>
      <div className="flex items-center gap-3">
        <Link url="https://www.facebook.com/healthprotectionofficial" target={'_blank'}>
          <FacebookIcon />
        </Link>
        <Link url="https://www.instagram.com/health.protection/" target={'_blank'}>
          <InstagramIcon />
        </Link>
        <Link url="https://www.linkedin.com/company/healthprotection/" target={'_blank'}>
          <LinkedinIcon />
        </Link>
        <Link url="https://www.youtube.com/channel/UCRr-QoxG844j01WdvL9vrag" target={'_blank'}>
          <YoutubeIcon />
        </Link>
        <TikTokIcon />
      </div>
    </address>
  );
}
