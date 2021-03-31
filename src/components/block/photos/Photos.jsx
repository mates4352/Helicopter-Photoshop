import s from "./Photos.module.scss"
import { data } from "./../../common/image/data"
import { Image } from "../../common/image/Image"

export const Photos = () => {
	return (
		<section className={s.Photos}>
			<div className={s.container}>
				<div className={s.title}>Фотографии пакета</div>
				<div className={s.grid}>
					{data[0] &&
						<Image
							src={data[0].src}
							alt={data[0].src} />
					}
					{data[1] &&
						<Image
							src={data[1].src}
							alt={data[1].src} />
					}
					{data[2] &&
						<Image
							src={data[2].src}
							alt={data[2].src} />
					}
					{data[3] &&
						<Image
							src={data[3].src}
							alt={data[3].src} />
					}
					{data[4] &&
						<Image
							src={data[4].src}
							alt={data[4].src} />
					}
					{data[5] &&
						<Image
							src={data[5].src}
							alt={data[5].src} />
					}
					{data[6] &&
						<Image
							src={data[6].src}
							alt={data[6].src} />
					}
					{data[7] &&
						<Image
							src={data[7].src}
							alt={data[7].src} />
					}
					{data[8] &&
						<Image
							src={data[8].src}
							alt={data[8].src} />
					}
				</div>
			</div>
		</section>
	);
}