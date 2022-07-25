import { IList } from '@/shared/types/user.types'
import { useEffect, useState } from 'react'
import { Container, Translate } from './styles'
import Button from '@/components/ui/Button/Button'
interface ITrainWords {
	list: IList
}
const TrainWords: React.FC<ITrainWords> = ({ list }) => {
	useEffect(() => {
		if (list) setWords(list.words)
	}, [list])

	const [indexMax, setIndexMax] = useState(0)
	const [visibleTranslate, setVisibleTranslate] = useState(false)
	const [words, setWords] = useState(list.words)

	/* СЛЕДУЮЩЕЕ СЛОВО БЕЗ УДАЛЕНИЕ */
	const nextWord = () => {
		setIndexMax((x) => ++x)
		setVisibleTranslate(false)
	}
	/*  ПЕРЕВОД */
	const lookAnswer = () => {
		setVisibleTranslate(true)
	}
	/*  УДАЛЕНИЕ  КНОПКА ЗНАЮ*/
	const deleteWord = (e: any) => {
		/*  setVisible(true) */
		const idx = words.findIndex((el) => el._id === e.target.value)
		const newArray = [...words.slice(0, idx), ...words.slice(idx + 1)]
		setWords(newArray)
		if (indexMax === newArray.length) {
			setIndexMax(0)
		} else {
			setIndexMax((x) => ++x)
		}
	}
	if (indexMax === 5 || (indexMax === words.length && words.length !== 0)) {
		setIndexMax(0)
	}
	const repeatWords = () => {
		setWords(list.words)
		setIndexMax(0)
	}
	const elements = words.map((item) => {
		return (
			<div key={item._id} className="training">
				<div className="text">
					<h5 className="textWord">{item.word} </h5>
					<h5 className="transcript">{item.transcription}</h5>
					<Translate visible={visibleTranslate}>{item.translate}</Translate>
				</div>
				<div className="allTrainingButn">
					<Button
						className="trainingButn"
						onClick={() => {
							lookAnswer()
						}}
					>
						Перевод
					</Button>
					<Button
						className="trainingButn"
						onClick={() => {
							nextWord()
						}}
					>
						Не знаю
					</Button>
					<Button
						className="trainingButn"
						onClick={(e) => {
							deleteWord(e)
						}}
					>
						Знаю
					</Button>
				</div>
			</div>
		)
	})

	return (
		<Container>
			<h1>TrainWords</h1>
			{list?.listName}
			{elements[indexMax]}
			{elements.length === 0 ? (
				<button onClick={() => repeatWords()}>Начать заново</button>
			) : null}
		</Container>
	)
}

export default TrainWords
