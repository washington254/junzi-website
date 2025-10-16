# Video Player Components

Современные компоненты видеоплеера для React с поддержкой preview и красивым дизайном в стиле Junzi.

## Компоненты

### VideoPlayer
Полнофункциональный видеоплеер с элементами управления, preview функциональностью и визуальными индикаторами.

### SimpleVideoPlayer
Упрощенная версия видеоплеера для hero-section с минимальными элементами управления и сменой иконки Play/Pause.

## Особенности

- 🎨 Современный дизайн в стиле Junzi с основным цветом #4c73e4
- 🎬 Визуальные индикаторы (пульсирующая кнопка, градиентная рамка)
- 📱 Адаптивный дизайн
- 🖱️ Preview функциональность при наведении на прогресс-бар (VideoPlayer)
- 🖼️ Поддержка статичного изображения для preview
- ⚡ Плавные анимации и переходы
- 🎯 Доступность и UX
- 🔄 Смена иконки Play/Pause при воспроизведении

## Использование

### VideoPlayer

```tsx
import VideoPlayer from './VideoPlayer';

// С статичным изображением для preview
<VideoPlayer
  src="/path/to/video.mp4"
  title="Video Title"
  previewImage="/path/to/preview-image.jpg"
  className="w-full h-96"
/>

// Без preview изображения (генерирует кадры из видео)
<VideoPlayer
  src="/path/to/video.mp4"
  title="Video Title"
  className="w-full h-96"
/>
```

### SimpleVideoPlayer

```tsx
import SimpleVideoPlayer from './SimpleVideoPlayer';

// С preview изображением (без прогресс-бара)
<SimpleVideoPlayer
  src="/path/to/video.mp4"
  title="Video Title"
  previewImage="/path/to/preview-image.jpg"
  className="w-full h-64"
/>

// Без preview изображения
<SimpleVideoPlayer
  src="/path/to/video.mp4"
  title="Video Title"
  className="w-full h-64"
/>
```

## Props

### VideoPlayer Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | URL видео файла |
| `title` | `string` | `"Video"` | Заголовок видео |
| `className` | `string` | `""` | CSS классы |
| `autoPlay` | `boolean` | `false` | Автоматическое воспроизведение |
| `loop` | `boolean` | `false` | Зацикливание видео |
| `muted` | `boolean` | `false` | Без звука |
| `playsInline` | `boolean` | `false` | Воспроизведение в строке |
| `previewImage` | `string` | - | URL изображения для preview |

### SimpleVideoPlayer Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | URL видео файла |
| `title` | `string` | `"Video"` | Заголовок видео |
| `className` | `string` | `""` | CSS классы |
| `autoPlay` | `boolean` | `false` | Автоматическое воспроизведение |
| `loop` | `boolean` | `false` | Зацикливание видео |
| `muted` | `boolean` | `false` | Без звука |
| `playsInline` | `boolean` | `false` | Воспроизведение в строке |
| `previewImage` | `string` | - | URL изображения для preview |

## Preview Функциональность

### VideoPlayer
- **С прогресс-баром**: Показывает preview при наведении на прогресс-бар
- **Статичное изображение**: Передайте `previewImage` для быстрой работы
- **Генерация кадров**: Если `previewImage` не указан, генерирует кадры из видео

### SimpleVideoPlayer
- **Без прогресс-бара**: Упрощенная версия без элементов управления
- **Смена иконки**: Кнопка меняется с Play на Pause при воспроизведении
- **Preview изображение**: Поддерживает `previewImage` для визуального индикатора

## Стилизация

Компоненты используют CSS модули и могут быть стилизованы через:

1. **CSS классы** - передайте `className` для кастомных стилей
2. **CSS переменные** - переопределите цвета и размеры
3. **CSS модули** - отредактируйте `VideoPlayer.module.css`

## Примеры интеграции

### Hero Section (SimpleVideoPlayer)
```tsx
<SimpleVideoPlayer
  src="/hero-video.mp4"
  previewImage="/hero-preview.jpg"
  className="w-full h-screen"
  autoPlay={true}
  muted={true}
  loop={true}
/>
```

### Галерея видео (VideoPlayer)
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {videos.map(video => (
    <VideoPlayer
      key={video.id}
      src={video.url}
      title={video.title}
      previewImage={video.preview}
      className="w-full h-48"
    />
  ))}
</div>
```

## Требования

- React 18+
- TypeScript
- Tailwind CSS (для базовых стилей)
- Lucide React (для иконок)

## Установка

```bash
npm install lucide-react
```

## Демо

Запустите демо-компонент для просмотра всех возможностей:

```tsx
import VideoPlayerDemo from './VideoPlayerDemo';

<VideoPlayerDemo />
``` 