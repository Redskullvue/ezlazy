# EzLazy

A **lightweight, dependency-free JavaScript library** for lazy-loading images and background images using the IntersectionObserver API.  
Works out-of-the-box with HTML attributes — no extra JS code needed for simple usage.

---

## 🚀 Features

- Lazy-load `<img>` elements with `data-ezlazy`
- Lazy-load background images with `data-ezlazy-bg`
- Automatic fallback for browsers without IntersectionObserver
- Tiny, simple, and dependency-free
- Easy to use via npm or CDN

---

## 💻 Installation

### Using npm

```bash
npm install ezlazy
```

import it to your main.js

```
import 'ezlazy';
```

### Using CDN

```
<script src="https://unpkg.com/ezlazy/dist/ezlazy.min.js"></script>
```

---

## 📝 Usage

Super easy to use

# To load images <img> just add the `data-ezlazy="your-image.png"` to your HTML

```
<img data-ezlazy="image1.jpg" alt="Lazy Image">
```

# To load background images from CSS just add the `data-ezlazy-bg="your-image.jpg"` to your HTML

```
<div data-ezlazy-bg="background1.jpg"></div>
```

That’s it! The library will automatically load images when they come near the viewport.

---

## 🔧 Browser Support

-Modern browsers with IntersectionObserver support

=Fallback: loads all images if IntersectionObserver is not available

---

## 📄 License

This project is licensed under the MIT License

---

## ⭐ Contributing

Contributions are welcome :D
Feel free to open issues and discuss the features or the bugs

---

# If you liked the project please give it a star
