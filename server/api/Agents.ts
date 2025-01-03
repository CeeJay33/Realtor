export default defineEventHandler(async (event) => {
  
  const agents = [
    {
      success: true,
      code: 200,
      message: "sucess",
      data: {
        breadcrumbs: [],
        search: {
          userInput: {
            profileType: "2",
            name: "cindy",
            specialties: ["Any"],
            page: 1,
          },
          region: null,
        },
        results: {
          total: 5986,
          professionals: [
            {
              businessName: "The Powell Group Modern ",
              encodedZuid: "X1-ZUuzj4dw1hpwcp_5taq2",
              fullName: "Cindy Abercrombie",
              location: "Anderson, SC",
              phoneNumber: "(864) 915-6452",
              profileLink: "/profile/abercrombierealtor1",
              profilePhotoSrc:
                "https://photos.zillowstatic.com/fp/62af164d0f288df302a56136cc429d68-h_g.jpg",
              reviewLink: "/profile/abercrombierealtor1#reviews",
              numTotalReviews: 0,
              reviews: "0 reviews",
              reviewStarsRating: 0,
              saleCountAllTime: 7,
              saleCountLastYear: 0,
              salePriceRangeThreeYearMin: 0,
              salePriceRangeThreeYearMax: 0,
              isTeamLead: false,
              isTopAgent: false,
            },
            {
              businessName: "Bolton Johnston Associates",
              encodedZuid: "X1-ZUz3wthh8ieex5_7q4l7",
              fullName: "Cindy  Hill, GRI, CRS, ABR",
              location: "Grosse Pointe Farms, MN",
              phoneNumber: "(313) 884-6400",
              profileLink: "/profile/Cindy-Hill",
              profilePhotoSrc:
                "https://photos.zillowstatic.com/fp/300dabeaefe0d712b31a0e42fc4c87dc-h_g.jpg",
              reviewLink: "/profile/Cindy-Hill#reviews",
              numTotalReviews: 0,
              reviews: "0 reviews",
              reviewStarsRating: 0,
              saleCountAllTime: 84,
              saleCountLastYear: 2,
              salePriceRangeThreeYearMin: 325000,
              salePriceRangeThreeYearMax: 820000,
              isTeamLead: false,
              isTopAgent: false,
            },
            {
              businessName: "Real Estate Sales Force",
              encodedZuid: "X1-ZUxqnog21ra7t5_282em",
              fullName: "Cindy Abreu",
              location: "Coral Gables, FL",
              phoneNumber: "(786) 554-4249",
              profileLink: "/profile/AirForce2SalesForce",
              profilePhotoSrc:
                "https://photos.zillowstatic.com/fp/2d7378f08145a6e58b570a5e32840cfe-h_g.jpg",
              reviewExcerpt:
                "She went above and beyond to help me close the deal for our beautiful home in Miramar.",
              reviewExcerptDate: "2021-10-08 12:36:00",
              reviewLink: "/profile/AirForce2SalesForce#reviews",
              numTotalReviews: 14,
              reviews: "14 reviews",
              reviewStarsRating: 5,
              saleCountAllTime: 27,
              saleCountLastYear: 1,
              salePriceRangeThreeYearMin: 285000,
              salePriceRangeThreeYearMax: 800000,
              isTeamLead: false,
              isTopAgent: false,
            },
            {
              businessName: "Homesmart",
              encodedZuid: "X1-ZUv6nxmgs2aadl_2xcn4",
              fullName: "Cindy Acosta",
              location: "DOWNEY, CA",
              phoneNumber: "(562) 277-0760",
              profileLink: "/profile/Cindyacostarealtor",
              profilePhotoSrc:
                "https://photos.zillowstatic.com/fp/e9a711680cc1f0d7749b040239fe2ad4-h_g.jpg",
              reviewLink: "/profile/Cindyacostarealtor#reviews",
              numTotalReviews: 0,
              reviews: "0 reviews",
              reviewStarsRating: 0,
              saleCountAllTime: 0,
              saleCountLastYear: 0,
              salePriceRangeThreeYearMin: 0,
              salePriceRangeThreeYearMax: 0,
              isTeamLead: false,
              isTopAgent: false,
            },
            {
              businessName: "Aileen Fountain MLS",
              encodedZuid: "X1-ZU10czssoqc4npl_6msnz",
              fullName: "Cindy Adams",
              location: "Gulf Shores, AL",
              phoneNumber: "(251) 979-1404",
              profileLink: "/profile/ilovegulfshores",
              profilePhotoSrc:
                "https://photos.zillowstatic.com/fp/427b2139b0c14ef69570814ed8c71077-h_g.jpg",
              reviewExcerpt:
                "She did an amazing job negotiating the best price for the home in the right location.",
              reviewExcerptDate: "2020-04-02 15:35:00",
              reviewLink: "/profile/ilovegulfshores#reviews",
              numTotalReviews: 5,
              reviews: "5 reviews",
              reviewStarsRating: 5,
              saleCountAllTime: 58,
              saleCountLastYear: 3,
              salePriceRangeThreeYearMin: 220000,
              salePriceRangeThreeYearMax: 2575000,
              isTeamLead: false,
              isTopAgent: false,
            },
            {
              businessName: "Palm Sky Homes ",
              encodedZuid: "X1-ZUxhhviz3huia1_5qhl4",
              fullName: "Cindy Aguilar",
              location: "Phoenix, AZ",
              phoneNumber: "(602) 921-3054",
              profileLink: "/profile/Cindy-Aguilar",
              profilePhotoSrc:
                "https://photos.zillowstatic.com/fp/95033e691997e433b74a98aa758a8afa-h_g.jpg",
              reviewLink: "/profile/Cindy-Aguilar#reviews",
              numTotalReviews: 0,
              reviews: "0 reviews",
              reviewStarsRating: 0,
              saleCountAllTime: 0,
              saleCountLastYear: 0,
              salePriceRangeThreeYearMin: 0,
              salePriceRangeThreeYearMax: 0,
              isTeamLead: false,
              isTopAgent: false,
            },
            {
              businessName: "Keller Williams",
              encodedZuid: "X1-ZUvykyj9sypts9_8p8t0",
              fullName: "Cindy Albrecht",
              location: "Fresno, CA",
              phoneNumber: "(559) 706-7458",
              profileLink: "/profile/cindy-albrecht",
              profilePhotoSrc:
                "https://photos.zillowstatic.com/fp/e0b88e3fcdabe48462e5f5b0de2ff4fb-h_g.jpg",
              reviewLink: "/profile/cindy-albrecht#reviews",
              numTotalReviews: 0,
              reviews: "0 reviews",
              reviewStarsRating: 0,
              saleCountAllTime: 2,
              saleCountLastYear: 0,
              salePriceRangeThreeYearMin: 435000,
              salePriceRangeThreeYearMax: 435000,
              isTeamLead: false,
              isTopAgent: false,
            },
            {
              businessName: "DFWMoves, LLC",
              encodedZuid: "X1-ZUz4nsuhxt2x3d_aroy1",
              fullName: "Cindy Allen",
              location: "Southlake, TX",
              phoneNumber: "(817) 300-9634",
              profileLink: "/profile/DFWMoves",
              profilePhotoSrc:
                "https://photos.zillowstatic.com/fp/a05a80eed48bed553264805db331c306-h_g.jpg",
              reviewExcerpt:
                "Cindy did an outstanding job of explaining to us each step of the buying and selling ...",
              reviewExcerptDate: "2022-01-11 19:21:00",
              reviewLink: "/profile/DFWMoves#reviews",
              numTotalReviews: 14,
              reviews: "14 reviews",
              reviewStarsRating: 5,
              saleCountAllTime: 270,
              saleCountLastYear: 10,
              salePriceRangeThreeYearMin: 307200,
              salePriceRangeThreeYearMax: 1617800,
              isTeamLead: false,
              isTopAgent: false,
            },
            {
              businessName: null,
              encodedZuid: "X1-ZU11jqmsbow86x5_9od0t",
              fullName: "Cindy Allen",
              location: "",
              phoneNumber: "(727) 430-4084",
              profileLink: "/profile/cindy-allen3",
              profilePhotoSrc:
                "https://photos.zillowstatic.com/fp/6e8862d67f3367fba8d8b50bd896469b-h_g.jpg",
              reviewLink: "/profile/cindy-allen3#reviews",
              numTotalReviews: 0,
              reviews: "0 reviews",
              reviewStarsRating: 0,
              saleCountAllTime: 19,
              saleCountLastYear: 0,
              salePriceRangeThreeYearMin: 0,
              salePriceRangeThreeYearMax: 0,
              isTeamLead: false,
              isTopAgent: false,
            },
            {
              businessName: "Metro Premier Homes",
              encodedZuid: "X1-ZU10bv6my5ijhft_aroy1",
              fullName: "Cindy Allen",
              location: "Richmond, VA",
              phoneNumber: "(703) 606-4156",
              profileLink: "/profile/Cindy-Allen5",
              profilePhotoSrc:
                "https://photos.zillowstatic.com/fp/6729d6c841148369b0f5ac7b8f2b636c-h_g.jpg",
              reviewExcerpt:
                "She was easy to work with and quick to respond to any of my questions.",
              reviewExcerptDate: "2024-11-19 08:27:00",
              reviewLink: "/profile/Cindy-Allen5#reviews",
              numTotalReviews: 33,
              reviews: "33 reviews",
              reviewStarsRating: 5,
              saleCountAllTime: 497,
              saleCountLastYear: 20,
              salePriceRangeThreeYearMin: 42000,
              salePriceRangeThreeYearMax: 1145000,
              isTeamLead: false,
              isTopAgent: false,
            },
            {
              businessName: "Coldwell Banker Majestic Mountain ",
              encodedZuid: "X1-ZUzv6f1u0x77yh_3if67",
              fullName: "Cindy Allen",
              location: "Duck Creek Village, UT",
              phoneNumber: "(435) 590-3766",
              profileLink: "/profile/cindy039",
              profilePhotoSrc:
                "https://photos.zillowstatic.com/fp/523ac8a95cba29e6914e2b49627e87c0-h_g.jpg",
              reviewLink: "/profile/cindy039#reviews",
              numTotalReviews: 0,
              reviews: "0 reviews",
              reviewStarsRating: 0,
              saleCountAllTime: 0,
              saleCountLastYear: 0,
              salePriceRangeThreeYearMin: 0,
              salePriceRangeThreeYearMax: 0,
              isTeamLead: false,
              isTopAgent: false,
            },
            {
              businessName: "Crye-Leike",
              encodedZuid: "X1-ZUzfwtbmrawqo9_4dbol",
              fullName: "Cindy Allen",
              location: "Madison, AL",
              phoneNumber: "(256) 651-9887",
              profileLink: "/profile/user4785350",
              profilePhotoSrc:
                "https://photos.zillowstatic.com/fp/e6ddd28d68d1e83e673abec34c5b0aa7-h_g.jpg",
              reviewLink: "/profile/user4785350#reviews",
              numTotalReviews: 0,
              reviews: "0 reviews",
              reviewStarsRating: 0,
              saleCountAllTime: 2,
              saleCountLastYear: 0,
              salePriceRangeThreeYearMin: 0,
              salePriceRangeThreeYearMax: 0,
              isTeamLead: false,
              isTopAgent: false,
            },
            {
              businessName: "Lake Breeze Real Estate",
              encodedZuid: "X1-ZUz3u50ysc1zbd_2t4xp",
              fullName: "Cindy Alves",
              location: "Canandaigua, NY",
              phoneNumber: "(585) 393-9919",
              profileLink: "/profile/Cindy-Alves",
              profilePhotoSrc:
                "https://photos.zillowstatic.com/fp/5a0e051237020cfacd610650b3290ae1-h_g.jpg",
              reviewExcerpt:
                "She was professional and had a nice plan of marketing and was always keeping me ...",
              reviewExcerptDate: "2015-02-04 19:43:00",
              reviewLink: "/profile/Cindy-Alves#reviews",
              numTotalReviews: 4,
              reviews: "4 reviews",
              reviewStarsRating: 5,
              saleCountAllTime: 20,
              saleCountLastYear: 0,
              salePriceRangeThreeYearMin: 0,
              salePriceRangeThreeYearMax: 0,
              isTeamLead: false,
              isTopAgent: false,
            },
            {
              businessName: "Lake Breeze Real Estate",
              encodedZuid: "X1-ZUuwoakee2dxjd_6ikyk",
              fullName: "Cindy Alves",
              location: "Canandaigua, NY",
              phoneNumber: "(585) 393-9919",
              profileLink: "/profile/lakebr585",
              profilePhotoSrc:
                "https://photos.zillowstatic.com/fp/1f188772a3985f6a0762e4399e4fde5d-h_g.jpg",
              reviewLink: "/profile/lakebr585#reviews",
              numTotalReviews: 0,
              reviews: "0 reviews",
              reviewStarsRating: 0,
              saleCountAllTime: 3,
              saleCountLastYear: 2,
              salePriceRangeThreeYearMin: 355000,
              salePriceRangeThreeYearMax: 980000,
              isTeamLead: false,
              isTopAgent: false,
            },
            {
              businessName: "Colorado Living, Real Estate",
              encodedZuid: "X1-ZUyy1a1h0ukufd_9vdv6",
              fullName: "Cindy Constantino and Joy Rubley",
              location: "COLORADO SPRINGS, CO",
              phoneNumber: "(719) 440-0122",
              profileLink: "/profile/Cindy-and-Joy",
              profilePhotoSrc:
                "https://photos.z0illowstatic.com/fp/4bb7e6d88710be02936ce9a338f5f2b5-h_g.jpg",
              reviewExcerpt:
                "We were so impressed with Cindy when we bought our first house in the ...",
              reviewExcerptDate: "2023-11-13 08:01:00",
              reviewLink: "/profile/Cindy-and-Joy#reviews",
              numTotalReviews: 38,
              reviews: "38 reviews",
              reviewStarsRating: 5,
              saleCountAllTime: 851,
              saleCountLastYear: 6,
              salePriceRangeThreeYearMin: 260000,
              salePriceRangeThreeYearMax: 1947634,
              isTeamLead: true,
              isTopAgent: false,
            },
          ],
        },
        seoFooters: [
          {
            heading: "Real Estate Agents",
            items: [
              {
                text: "California Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/ca/",
              },
              {
                text: "Texas Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/tx/",
              },
              {
                text: "Florida Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/fl/",
              },
              {
                text: "New York Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/ny/",
              },
              {
                text: "Ontario Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/on/",
              },
              {
                text: "Illinois Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/il/",
              },
              {
                text: "Pennsylvania Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/pa/",
              },
              {
                text: "Ohio Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/oh/",
              },
              {
                text: "Georgia Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/ga/",
              },
              {
                text: "North Carolina Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/nc/",
              },
              {
                text: "Michigan Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/mi/",
              },
              {
                text: "New Jersey Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/nj/",
              },
              {
                text: "Virginia Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/va/",
              },
              {
                text: "Quebec Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/qc/",
              },
              {
                text: "Washington Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/wa/",
              },
              {
                text: "Massachusetts Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/ma/",
              },
              {
                text: "Arizona Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/az/",
              },
              {
                text: "Indiana Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/in/",
              },
              {
                text: "Tennessee Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/tn/",
              },
              {
                text: "Missouri Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/mo/",
              },
              {
                text: "Maryland Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/md/",
              },
              {
                text: "Wisconsin Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/wi/",
              },
              {
                text: "Minnesota Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/mn/",
              },
              {
                text: "Colorado Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/co/",
              },
              {
                text: "Alabama Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/al/",
              },
              {
                text: "South Carolina Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/sc/",
              },
              {
                text: "British Columbia Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/bc/",
              },
              {
                text: "Louisiana Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/la/",
              },
              {
                text: "Kentucky Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/ky/",
              },
              {
                text: "Alberta Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/ab/",
              },
              {
                text: "Oregon Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/or/",
              },
              {
                text: "Oklahoma Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/ok/",
              },
              {
                text: "Connecticut Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/ct/",
              },
              {
                text: "Puerto Rico Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/pr/",
              },
              {
                text: "Iowa Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/ia/",
              },
              {
                text: "Mississippi Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/ms/",
              },
              {
                text: "Arkansas Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/ar/",
              },
              {
                text: "Utah Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/ut/",
              },
              {
                text: "Kansas Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/ks/",
              },
              {
                text: "Nevada Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/nv/",
              },
              {
                text: "New Mexico Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/nm/",
              },
              {
                text: "Nebraska Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/ne/",
              },
              {
                text: "West Virginia Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/wv/",
              },
              {
                text: "Idaho Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/id/",
              },
              {
                text: "Hawaii Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/hi/",
              },
              {
                text: "Maine Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/me/",
              },
              {
                text: "New Hampshire Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/nh/",
              },
              {
                text: "Manitoba Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/mb/",
              },
              {
                text: "Saskatchewan Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/sk/",
              },
              {
                text: "Rhode Island Real Estate Agents",
                url: "/professionals/real-estate-agent-reviews/ri/",
              },
            ],
          },
          {
            heading: "Mortgage Lenders",
            items: [
              {
                text: "California Mortgage Lenders",
                url: "/lender-directory/ca/",
              },
              { text: "Texas Mortgage Lenders", url: "/lender-directory/tx/" },
              {
                text: "Florida Mortgage Lenders",
                url: "/lender-directory/fl/",
              },
              {
                text: "New York Mortgage Lenders",
                url: "/lender-directory/ny/",
              },
              {
                text: "Ontario Mortgage Lenders",
                url: "/lender-directory/on/",
              },
              {
                text: "Illinois Mortgage Lenders",
                url: "/lender-directory/il/",
              },
              {
                text: "Pennsylvania Mortgage Lenders",
                url: "/lender-directory/pa/",
              },
              { text: "Ohio Mortgage Lenders", url: "/lender-directory/oh/" },
              {
                text: "Georgia Mortgage Lenders",
                url: "/lender-directory/ga/",
              },
              {
                text: "North Carolina Mortgage Lenders",
                url: "/lender-directory/nc/",
              },
              {
                text: "Michigan Mortgage Lenders",
                url: "/lender-directory/mi/",
              },
              {
                text: "New Jersey Mortgage Lenders",
                url: "/lender-directory/nj/",
              },
              {
                text: "Virginia Mortgage Lenders",
                url: "/lender-directory/va/",
              },
              { text: "Quebec Mortgage Lenders", url: "/lender-directory/qc/" },
              {
                text: "Washington Mortgage Lenders",
                url: "/lender-directory/wa/",
              },
              {
                text: "Massachusetts Mortgage Lenders",
                url: "/lender-directory/ma/",
              },
              {
                text: "Arizona Mortgage Lenders",
                url: "/lender-directory/az/",
              },
              {
                text: "Indiana Mortgage Lenders",
                url: "/lender-directory/in/",
              },
              {
                text: "Tennessee Mortgage Lenders",
                url: "/lender-directory/tn/",
              },
              {
                text: "Missouri Mortgage Lenders",
                url: "/lender-directory/mo/",
              },
              {
                text: "Maryland Mortgage Lenders",
                url: "/lender-directory/md/",
              },
              {
                text: "Wisconsin Mortgage Lenders",
                url: "/lender-directory/wi/",
              },
              {
                text: "Minnesota Mortgage Lenders",
                url: "/lender-directory/mn/",
              },
              {
                text: "Colorado Mortgage Lenders",
                url: "/lender-directory/co/",
              },
              {
                text: "Alabama Mortgage Lenders",
                url: "/lender-directory/al/",
              },
              {
                text: "South Carolina Mortgage Lenders",
                url: "/lender-directory/sc/",
              },
              {
                text: "British Columbia Mortgage Lenders",
                url: "/lender-directory/bc/",
              },
              {
                text: "Louisiana Mortgage Lenders",
                url: "/lender-directory/la/",
              },
              {
                text: "Kentucky Mortgage Lenders",
                url: "/lender-directory/ky/",
              },
              {
                text: "Alberta Mortgage Lenders",
                url: "/lender-directory/ab/",
              },
              { text: "Oregon Mortgage Lenders", url: "/lender-directory/or/" },
              {
                text: "Oklahoma Mortgage Lenders",
                url: "/lender-directory/ok/",
              },
              {
                text: "Connecticut Mortgage Lenders",
                url: "/lender-directory/ct/",
              },
              {
                text: "Puerto Rico Mortgage Lenders",
                url: "/lender-directory/pr/",
              },
              { text: "Iowa Mortgage Lenders", url: "/lender-directory/ia/" },
              {
                text: "Mississippi Mortgage Lenders",
                url: "/lender-directory/ms/",
              },
              {
                text: "Arkansas Mortgage Lenders",
                url: "/lender-directory/ar/",
              },
              { text: "Utah Mortgage Lenders", url: "/lender-directory/ut/" },
              { text: "Kansas Mortgage Lenders", url: "/lender-directory/ks/" },
              { text: "Nevada Mortgage Lenders", url: "/lender-directory/nv/" },
              {
                text: "New Mexico Mortgage Lenders",
                url: "/lender-directory/nm/",
              },
              {
                text: "Nebraska Mortgage Lenders",
                url: "/lender-directory/ne/",
              },
              {
                text: "West Virginia Mortgage Lenders",
                url: "/lender-directory/wv/",
              },
              { text: "Idaho Mortgage Lenders", url: "/lender-directory/id/" },
              { text: "Hawaii Mortgage Lenders", url: "/lender-directory/hi/" },
              { text: "Maine Mortgage Lenders", url: "/lender-directory/me/" },
              {
                text: "New Hampshire Mortgage Lenders",
                url: "/lender-directory/nh/",
              },
              {
                text: "Manitoba Mortgage Lenders",
                url: "/lender-directory/mb/",
              },
              {
                text: "Saskatchewan Mortgage Lenders",
                url: "/lender-directory/sk/",
              },
              {
                text: "Rhode Island Mortgage Lenders",
                url: "/lender-directory/ri/",
              },
            ],
          },
          {
            heading: "Home Improvement Pros",
            items: [
              {
                text: "California Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/ca/",
              },
              {
                text: "Texas Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/tx/",
              },
              {
                text: "Florida Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/fl/",
              },
              {
                text: "New York Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/ny/",
              },
              {
                text: "Ontario Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/on/",
              },
              {
                text: "Illinois Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/il/",
              },
              {
                text: "Pennsylvania Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/pa/",
              },
              {
                text: "Ohio Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/oh/",
              },
              {
                text: "Georgia Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/ga/",
              },
              {
                text: "North Carolina Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/nc/",
              },
              {
                text: "Michigan Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/mi/",
              },
              {
                text: "New Jersey Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/nj/",
              },
              {
                text: "Virginia Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/va/",
              },
              {
                text: "Quebec Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/qc/",
              },
              {
                text: "Washington Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/wa/",
              },
              {
                text: "Massachusetts Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/ma/",
              },
              {
                text: "Arizona Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/az/",
              },
              {
                text: "Indiana Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/in/",
              },
              {
                text: "Tennessee Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/tn/",
              },
              {
                text: "Missouri Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/mo/",
              },
              {
                text: "Maryland Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/md/",
              },
              {
                text: "Wisconsin Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/wi/",
              },
              {
                text: "Minnesota Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/mn/",
              },
              {
                text: "Colorado Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/co/",
              },
              {
                text: "Alabama Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/al/",
              },
              {
                text: "South Carolina Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/sc/",
              },
              {
                text: "British Columbia Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/bc/",
              },
              {
                text: "Louisiana Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/la/",
              },
              {
                text: "Kentucky Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/ky/",
              },
              {
                text: "Alberta Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/ab/",
              },
              {
                text: "Oregon Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/or/",
              },
              {
                text: "Oklahoma Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/ok/",
              },
              {
                text: "Connecticut Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/ct/",
              },
              {
                text: "Puerto Rico Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/pr/",
              },
              {
                text: "Iowa Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/ia/",
              },
              {
                text: "Mississippi Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/ms/",
              },
              {
                text: "Arkansas Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/ar/",
              },
              {
                text: "Utah Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/ut/",
              },
              {
                text: "Kansas Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/ks/",
              },
              {
                text: "Nevada Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/nv/",
              },
              {
                text: "New Mexico Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/nm/",
              },
              {
                text: "Nebraska Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/ne/",
              },
              {
                text: "West Virginia Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/wv/",
              },
              {
                text: "Idaho Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/id/",
              },
              {
                text: "Hawaii Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/hi/",
              },
              {
                text: "Maine Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/me/",
              },
              {
                text: "New Hampshire Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/nh/",
              },
              {
                text: "Manitoba Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/mb/",
              },
              {
                text: "Saskatchewan Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/sk/",
              },
              {
                text: "Rhode Island Home Improvement Pros",
                url: "/professionals/home-improvement-reviews/ri/",
              },
            ],
          },
          {
            heading: "Property Managers",
            items: [
              {
                text: "California Property Managers",
                url: "/professionals/property-manager-reviews/ca/",
              },
              {
                text: "Texas Property Managers",
                url: "/professionals/property-manager-reviews/tx/",
              },
              {
                text: "Florida Property Managers",
                url: "/professionals/property-manager-reviews/fl/",
              },
              {
                text: "New York Property Managers",
                url: "/professionals/property-manager-reviews/ny/",
              },
              {
                text: "Ontario Property Managers",
                url: "/professionals/property-manager-reviews/on/",
              },
              {
                text: "Illinois Property Managers",
                url: "/professionals/property-manager-reviews/il/",
              },
              {
                text: "Pennsylvania Property Managers",
                url: "/professionals/property-manager-reviews/pa/",
              },
              {
                text: "Ohio Property Managers",
                url: "/professionals/property-manager-reviews/oh/",
              },
              {
                text: "Georgia Property Managers",
                url: "/professionals/property-manager-reviews/ga/",
              },
              {
                text: "North Carolina Property Managers",
                url: "/professionals/property-manager-reviews/nc/",
              },
              {
                text: "Michigan Property Managers",
                url: "/professionals/property-manager-reviews/mi/",
              },
              {
                text: "New Jersey Property Managers",
                url: "/professionals/property-manager-reviews/nj/",
              },
              {
                text: "Virginia Property Managers",
                url: "/professionals/property-manager-reviews/va/",
              },
              {
                text: "Quebec Property Managers",
                url: "/professionals/property-manager-reviews/qc/",
              },
              {
                text: "Washington Property Managers",
                url: "/professionals/property-manager-reviews/wa/",
              },
              {
                text: "Massachusetts Property Managers",
                url: "/professionals/property-manager-reviews/ma/",
              },
              {
                text: "Arizona Property Managers",
                url: "/professionals/property-manager-reviews/az/",
              },
              {
                text: "Indiana Property Managers",
                url: "/professionals/property-manager-reviews/in/",
              },
              {
                text: "Tennessee Property Managers",
                url: "/professionals/property-manager-reviews/tn/",
              },
              {
                text: "Missouri Property Managers",
                url: "/professionals/property-manager-reviews/mo/",
              },
              {
                text: "Maryland Property Managers",
                url: "/professionals/property-manager-reviews/md/",
              },
              {
                text: "Wisconsin Property Managers",
                url: "/professionals/property-manager-reviews/wi/",
              },
              {
                text: "Minnesota Property Managers",
                url: "/professionals/property-manager-reviews/mn/",
              },
              {
                text: "Colorado Property Managers",
                url: "/professionals/property-manager-reviews/co/",
              },
              {
                text: "Alabama Property Managers",
                url: "/professionals/property-manager-reviews/al/",
              },
              {
                text: "South Carolina Property Managers",
                url: "/professionals/property-manager-reviews/sc/",
              },
              {
                text: "British Columbia Property Managers",
                url: "/professionals/property-manager-reviews/bc/",
              },
              {
                text: "Louisiana Property Managers",
                url: "/professionals/property-manager-reviews/la/",
              },
              {
                text: "Kentucky Property Managers",
                url: "/professionals/property-manager-reviews/ky/",
              },
              {
                text: "Alberta Property Managers",
                url: "/professionals/property-manager-reviews/ab/",
              },
              {
                text: "Oregon Property Managers",
                url: "/professionals/property-manager-reviews/or/",
              },
              {
                text: "Oklahoma Property Managers",
                url: "/professionals/property-manager-reviews/ok/",
              },
              {
                text: "Connecticut Property Managers",
                url: "/professionals/property-manager-reviews/ct/",
              },
              {
                text: "Puerto Rico Property Managers",
                url: "/professionals/property-manager-reviews/pr/",
              },
              {
                text: "Iowa Property Managers",
                url: "/professionals/property-manager-reviews/ia/",
              },
              {
                text: "Mississippi Property Managers",
                url: "/professionals/property-manager-reviews/ms/",
              },
              {
                text: "Arkansas Property Managers",
                url: "/professionals/property-manager-reviews/ar/",
              },
              {
                text: "Utah Property Managers",
                url: "/professionals/property-manager-reviews/ut/",
              },
              {
                text: "Kansas Property Managers",
                url: "/professionals/property-manager-reviews/ks/",
              },
              {
                text: "Nevada Property Managers",
                url: "/professionals/property-manager-reviews/nv/",
              },
              {
                text: "New Mexico Property Managers",
                url: "/professionals/property-manager-reviews/nm/",
              },
              {
                text: "Nebraska Property Managers",
                url: "/professionals/property-manager-reviews/ne/",
              },
              {
                text: "West Virginia Property Managers",
                url: "/professionals/property-manager-reviews/wv/",
              },
              {
                text: "Idaho Property Managers",
                url: "/professionals/property-manager-reviews/id/",
              },
              {
                text: "Hawaii Property Managers",
                url: "/professionals/property-manager-reviews/hi/",
              },
              {
                text: "Maine Property Managers",
                url: "/professionals/property-manager-reviews/me/",
              },
              {
                text: "New Hampshire Property Managers",
                url: "/professionals/property-manager-reviews/nh/",
              },
              {
                text: "Manitoba Property Managers",
                url: "/professionals/property-manager-reviews/mb/",
              },
              {
                text: "Saskatchewan Property Managers",
                url: "/professionals/property-manager-reviews/sk/",
              },
              {
                text: "Rhode Island Property Managers",
                url: "/professionals/property-manager-reviews/ri/",
              },
            ],
          },
        ],
        isSearchInCanada: false,
      },
    },
  ];
  return agents
})
