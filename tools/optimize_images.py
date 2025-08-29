#!/usr/bin/env python3
"""
Image Optimization Script for PyTorch Course
Optimizes images in docs/assets/images/ for better web performance.
Alternative to MkDocs Material Insiders optimize plugin.
"""

import os
from pathlib import Path
from PIL import Image
import argparse
from typing import Tuple

def optimize_image(input_path: Path, output_path: Path, max_size: Tuple[int, int] = (1920, 1080), quality: int = 85) -> None:
    """
    Optimize a single image: resize and compress for web usage.
    
    Args:
        input_path: Path to input image
        output_path: Path to save optimized image
        max_size: Maximum dimensions (width, height)
        quality: JPEG quality (1-100)
    """
    try:
        with Image.open(input_path) as img:
            # Convert to RGB if necessary (for JPEG saving)
            if img.mode in ('RGBA', 'P', 'L'):
                # Keep transparency for PNG, convert to RGB for JPEG
                if output_path.suffix.lower() in ['.jpg', '.jpeg']:
                    # Create white background for JPEG
                    background = Image.new('RGB', img.size, (255, 255, 255))
                    if img.mode == 'P':
                        img = img.convert('RGBA')
                    if 'transparency' in img.info:
                        background.paste(img, mask=img.split()[-1])
                    else:
                        background.paste(img)
                    img = background
                elif img.mode in ('P', 'L'):
                    img = img.convert('RGBA')
            
            # Calculate new size maintaining aspect ratio
            original_size = img.size
            img.thumbnail(max_size, Image.Resampling.LANCZOS)
            new_size = img.size
            
            # Save optimized image
            save_kwargs = {'optimize': True}
            if output_path.suffix.lower() in ['.jpg', '.jpeg']:
                save_kwargs.update({
                    'quality': quality,
                    'progressive': True  # Progressive JPEG for better loading
                })
            elif output_path.suffix.lower() == '.png':
                save_kwargs.update({
                    'optimize': True,
                    'compress_level': 6  # PNG compression level 0-9
                })
            
            img.save(output_path, **save_kwargs)
            
            # Calculate size reduction
            original_size_mb = input_path.stat().st_size / (1024 * 1024)
            new_size_mb = output_path.stat().st_size / (1024 * 1024)
            reduction = ((original_size_mb - new_size_mb) / original_size_mb) * 100
            
            print(f"✅ {input_path.name}")
            print(f"   📐 {original_size[0]}x{original_size[1]} → {new_size[0]}x{new_size[1]}")
            print(f"   💾 {original_size_mb:.1f}MB → {new_size_mb:.1f}MB ({reduction:.1f}% reduction)")
            
    except Exception as e:
        print(f"❌ Error processing {input_path.name}: {e}")

def optimize_images_batch(
    input_dir: Path, 
    output_dir: Path = None, 
    max_size: Tuple[int, int] = (1920, 1080), 
    quality: int = 85,
    overwrite: bool = False
) -> None:
    """
    Batch optimize all images in a directory.
    
    Args:
        input_dir: Directory containing images to optimize
        output_dir: Directory to save optimized images (default: same as input)
        max_size: Maximum dimensions (width, height)
        quality: JPEG quality (1-100)
        overwrite: Whether to overwrite original files
    """
    if output_dir is None:
        output_dir = input_dir
    
    output_dir.mkdir(parents=True, exist_ok=True)
    
    # Supported image formats
    extensions = {'.jpg', '.jpeg', '.png', '.webp'}
    
    image_files = [
        f for f in input_dir.iterdir() 
        if f.is_file() and f.suffix.lower() in extensions
    ]
    
    if not image_files:
        print(f"❌ No images found in {input_dir}")
        return
    
    print(f"🖼️  Found {len(image_files)} images to optimize...")
    print(f"📁 Input:  {input_dir}")
    print(f"📁 Output: {output_dir}")
    print(f"📐 Max size: {max_size[0]}x{max_size[1]}")
    print(f"🎛️  Quality: {quality}%")
    print("-" * 60)
    
    total_original_size = 0
    total_new_size = 0
    
    for img_file in image_files:
        output_file = output_dir / img_file.name
        
        # Skip if output exists and overwrite is False
        if output_file.exists() and not overwrite and input_dir != output_dir:
            print(f"⏭️  Skipping {img_file.name} (already exists)")
            continue
        
        original_size = img_file.stat().st_size
        total_original_size += original_size
        
        optimize_image(img_file, output_file, max_size, quality)
        
        if output_file.exists():
            total_new_size += output_file.stat().st_size
    
    # Summary
    print("-" * 60)
    total_original_mb = total_original_size / (1024 * 1024)
    total_new_mb = total_new_size / (1024 * 1024)
    total_reduction = ((total_original_mb - total_new_mb) / total_original_mb) * 100 if total_original_mb > 0 else 0
    
    print(f"🎉 Optimization complete!")
    print(f"📊 Total: {total_original_mb:.1f}MB → {total_new_mb:.1f}MB ({total_reduction:.1f}% reduction)")

def main():
    parser = argparse.ArgumentParser(
        description="Optimize images for PyTorch Course website",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Optimize all images in docs/assets/images/
  python tools/optimize_images.py

  # Optimize with custom settings
  python tools/optimize_images.py --max-width 1600 --max-height 900 --quality 80

  # Optimize to different directory (preserve originals)
  python tools/optimize_images.py --output-dir docs/assets/images_optimized
        """
    )
    
    parser.add_argument(
        '--input-dir', '-i',
        type=Path,
        default=Path('docs/assets/images'),
        help='Input directory containing images (default: docs/assets/images)'
    )
    
    parser.add_argument(
        '--output-dir', '-o',
        type=Path,
        help='Output directory for optimized images (default: same as input)'
    )
    
    parser.add_argument(
        '--max-width',
        type=int,
        default=1920,
        help='Maximum width in pixels (default: 1920)'
    )
    
    parser.add_argument(
        '--max-height',
        type=int,
        default=1080,
        help='Maximum height in pixels (default: 1080)'
    )
    
    parser.add_argument(
        '--quality', '-q',
        type=int,
        default=85,
        help='JPEG quality 1-100 (default: 85)'
    )
    
    parser.add_argument(
        '--overwrite',
        action='store_true',
        help='Overwrite existing files'
    )
    
    args = parser.parse_args()
    
    if not args.input_dir.exists():
        print(f"❌ Input directory does not exist: {args.input_dir}")
        return 1
    
    max_size = (args.max_width, args.max_height)
    
    optimize_images_batch(
        input_dir=args.input_dir,
        output_dir=args.output_dir,
        max_size=max_size,
        quality=args.quality,
        overwrite=args.overwrite
    )
    
    return 0

if __name__ == '__main__':
    exit(main())
