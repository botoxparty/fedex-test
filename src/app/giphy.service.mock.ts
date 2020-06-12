import { Injectable } from '@angular/core';
import { GifsResult } from '@giphy/js-fetch-api';
import { of, Observable } from 'rxjs';

@Injectable()
export class GiphyServiceMock {
  fetchResults(search?: string): Observable<GifsResult> {
    /* There were inconsistencies between the GifsResult type and the
     *  actual response from the GIPHY API that I captured so I am
     *  casting it as (any) before casting as GifsResult
     */
    return of((MOCK_RESPONSE as any) as GifsResult);
  }
}

export const MOCK_RESPONSE = {
  data: [
    {
      type: 'gif',
      id: 'BYaN3s9Y5cuMU',
      url: 'https://giphy.com/gifs/sandler-sprinkler-BYaN3s9Y5cuMU',
      slug: 'sandler-sprinkler-BYaN3s9Y5cuMU',
      bitly_gif_url: 'https://gph.is/2jHdkre',
      bitly_url: 'https://gph.is/2jHdkre',
      embed_url: 'https://giphy.com/embed/BYaN3s9Y5cuMU',
      username: '',
      source:
        'https://www.reddit.com/r/HighQualityGifs/comments/5nvznv/adam_sandler_pounded_in_the_butt_by_a_gif_of_adam/',
      title: 'adam sandler GIF',
      rating: 'g',
      content_url: '',
      source_tld: 'www.reddit.com',
      source_post_url:
        'https://www.reddit.com/r/HighQualityGifs/comments/5nvznv/adam_sandler_pounded_in_the_butt_by_a_gif_of_adam/',
      import_datetime: '2017-01-14 06:08:45',
      trending_datetime: '0000-00-00 00:00:00',
      images: {
        downsized_large: {
          height: '265',
          size: '7684285',
          url:
            'https://media0.giphy.com/media/BYaN3s9Y5cuMU/giphy-downsized-large.gif',
          width: '353',
        },
        fixed_height_small_still: {
          height: '100',
          size: '12853',
          url: 'https://media0.giphy.com/media/BYaN3s9Y5cuMU/100_s.gif',
          width: '134',
        },
        original: {
          frames: '112',
          hash: '8d99e26b6fe16b9ba3ff2990314161bd',
          height: '360',
          mp4: 'https://media0.giphy.com/media/BYaN3s9Y5cuMU/giphy.mp4',
          mp4_size: '2121520',
          size: '17244466',
          url: 'https://media0.giphy.com/media/BYaN3s9Y5cuMU/giphy.gif',
          webp: 'https://media0.giphy.com/media/BYaN3s9Y5cuMU/giphy.webp',
          webp_size: '6280382',
          width: '480',
        },
        fixed_height_downsampled: {
          height: '200',
          size: '273974',
          url: 'https://media0.giphy.com/media/BYaN3s9Y5cuMU/200_d.gif',
          webp: 'https://media0.giphy.com/media/BYaN3s9Y5cuMU/200_d.webp',
          webp_size: '110048',
          width: '267',
        },
        downsized_still: {
          height: '187',
          size: '43529',
          url:
            'https://media0.giphy.com/media/BYaN3s9Y5cuMU/giphy-downsized_s.gif',
          width: '250',
        },
        fixed_height_still: {
          height: '200',
          size: '47998',
          url: 'https://media0.giphy.com/media/BYaN3s9Y5cuMU/200_s.gif',
          width: '267',
        },
        downsized_medium: {
          height: '233',
          size: '4798986',
          url:
            'https://media0.giphy.com/media/BYaN3s9Y5cuMU/giphy-downsized-medium.gif',
          width: '310',
        },
        downsized: {
          height: '187',
          size: '1185928',
          url:
            'https://media0.giphy.com/media/BYaN3s9Y5cuMU/giphy-downsized.gif',
          width: '250',
        },
        preview_webp: {
          height: '104',
          size: '49400',
          url:
            'https://media0.giphy.com/media/BYaN3s9Y5cuMU/giphy-preview.webp',
          width: '139',
        },
        original_mp4: {
          height: '360',
          mp4: 'https://media0.giphy.com/media/BYaN3s9Y5cuMU/giphy.mp4',
          mp4_size: '2121520',
          width: '480',
        },
        fixed_height_small: {
          height: '100',
          mp4: 'https://media0.giphy.com/media/BYaN3s9Y5cuMU/100.mp4',
          mp4_size: '86819',
          size: '1431695',
          url: 'https://media0.giphy.com/media/BYaN3s9Y5cuMU/100.gif',
          webp: 'https://media0.giphy.com/media/BYaN3s9Y5cuMU/100.webp',
          webp_size: '499018',
          width: '134',
        },
        fixed_height: {
          height: '200',
          mp4: 'https://media0.giphy.com/media/BYaN3s9Y5cuMU/200.mp4',
          mp4_size: '506734',
          size: '5351656',
          url: 'https://media0.giphy.com/media/BYaN3s9Y5cuMU/200.gif',
          webp: 'https://media0.giphy.com/media/BYaN3s9Y5cuMU/200.webp',
          webp_size: '1950654',
          width: '267',
        },
        downsized_small: {
          height: '114',
          mp4:
            'https://media0.giphy.com/media/BYaN3s9Y5cuMU/giphy-downsized-small.mp4',
          mp4_size: '185064',
          width: '152',
        },
        preview: {
          height: '112',
          mp4: 'https://media0.giphy.com/media/BYaN3s9Y5cuMU/giphy-preview.mp4',
          mp4_size: '48714',
          width: '150',
        },
        fixed_width_downsampled: {
          height: '150',
          size: '156737',
          url: 'https://media0.giphy.com/media/BYaN3s9Y5cuMU/200w_d.gif',
          webp: 'https://media0.giphy.com/media/BYaN3s9Y5cuMU/200w_d.webp',
          webp_size: '63728',
          width: '200',
        },
        fixed_width_small_still: {
          height: '75',
          size: '7797',
          url: 'https://media0.giphy.com/media/BYaN3s9Y5cuMU/100w_s.gif',
          width: '100',
        },
        fixed_width_small: {
          height: '75',
          mp4: 'https://media0.giphy.com/media/BYaN3s9Y5cuMU/100w.mp4',
          mp4_size: '44080',
          size: '864657',
          url: 'https://media0.giphy.com/media/BYaN3s9Y5cuMU/100w.gif',
          webp: 'https://media0.giphy.com/media/BYaN3s9Y5cuMU/100w.webp',
          webp_size: '304094',
          width: '100',
        },
        original_still: {
          height: '360',
          size: '155100',
          url: 'https://media0.giphy.com/media/BYaN3s9Y5cuMU/giphy_s.gif',
          width: '480',
        },
        fixed_width_still: {
          height: '150',
          size: '27443',
          url: 'https://media0.giphy.com/media/BYaN3s9Y5cuMU/200w_s.gif',
          width: '200',
        },
        looping: {
          mp4: 'https://media0.giphy.com/media/BYaN3s9Y5cuMU/giphy-loop.mp4',
          mp4_size: '7069571',
        },
        fixed_width: {
          height: '150',
          mp4: 'https://media0.giphy.com/media/BYaN3s9Y5cuMU/200w.mp4',
          mp4_size: '263283',
          size: '3053404',
          url: 'https://media0.giphy.com/media/BYaN3s9Y5cuMU/200w.gif',
          webp: 'https://media0.giphy.com/media/BYaN3s9Y5cuMU/200w.webp',
          webp_size: '1139700',
          width: '200',
        },
        preview_gif: {
          height: '73',
          size: '49847',
          url: 'https://media0.giphy.com/media/BYaN3s9Y5cuMU/giphy-preview.gif',
          width: '97',
        },
        '480w_still': {
          url: 'https://media0.giphy.com/media/BYaN3s9Y5cuMU/480w_s.jpg',
          width: '480',
          height: '360',
        },
      },
      analytics_response_payload:
        'e=Z2lmX2lkPUJZYU4zczlZNWN1TVUmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0yN2MzMTAzNTJiZTQwNDBlYzY4ODRiMmI3MTcxZjAwMzY5NDVkMzhlZmZmNjkyMzY',
      analytics: {
        onload: {
          url:
            'https://giphy-analytics.giphy.com/simple_analytics?response_id=2be4040ec6884b2b7171f0036945d38efff69236&event_type=GIF_SEARCH&gif_id=BYaN3s9Y5cuMU&action_type=SEEN',
        },
        onclick: {
          url:
            'https://giphy-analytics.giphy.com/simple_analytics?response_id=2be4040ec6884b2b7171f0036945d38efff69236&event_type=GIF_SEARCH&gif_id=BYaN3s9Y5cuMU&action_type=CLICK',
        },
        onsent: {
          url:
            'https://giphy-analytics.giphy.com/simple_analytics?response_id=2be4040ec6884b2b7171f0036945d38efff69236&event_type=GIF_SEARCH&gif_id=BYaN3s9Y5cuMU&action_type=SENT',
        },
      },
    },
  ],
  pagination: {
    total_count: 14753,
    count: 25,
    offset: 0,
  },
  meta: {
    status: 200,
    msg: 'OK',
    response_id: '2be4040ec6884b2b7171f0036945d38efff69236',
  },
};
