import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { v4 as uuidv4 } from 'uuid';
import { Autoplay } from 'swiper';
import Container from '~/components/container/Container';
import ItemArtists from '~/components/item/ItemArtists/ItemArtists';

function HomeSpotlight({ data }) {
    return (
        <Container swiper>
            <Swiper
                className={'swiper'}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay]}
                allowTouchMove={false}
                breakpoints={{
                    1: {
                        slidesPerView: 2,
                        slidesPerGroup: 1,
                        allowTouchMove: true,
                    },
                    740: {
                        slidesPerView: 5,
                        slidesPerGroup: 2,
                    },
                    1025: {
                        slidesPerView: 6,
                        slidesPerGroup: 3,
                    },
                }}
            >
                {data?.items?.map((item) => (
                    <SwiperSlide key={uuidv4()}>
                        <ItemArtists col="" data={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
}

export default HomeSpotlight;
