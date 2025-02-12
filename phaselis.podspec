Pod::Spec.new do |s|
  s.name             = 'phaselis'
  s.version          = '1.0.0'
  s.summary          = 'A React Native component library.'
  s.description      = <<-DESC
                       A React Native component library for building cross-platform applications.
                       DESC
  s.homepage         = 'https://github.com/ProtoYazilim/phaselis'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'Your Name' => 'your.email@example.com' }
  s.source           = { :git => 'https://github.com/ProtoYazilim/phaselis.git', :tag => s.version.to_s }
  s.platform         = :ios, '10.0'
  s.source_files     = 'src/**/*.{h,m,swift}'
  s.dependency       'React'
  s.dependency       'React-Core'
  s.dependency       'React-RCTText'
  s.dependency       'React-RCTImage'
  s.dependency       'React-RCTLinking'
  s.dependency       'RNGestureHandler', '~> 2.23.1'
  s.dependency       'RNReanimated', '~> 3.16.7'
  s.dependency       'RNScreens', '~> 4.6.0'
  s.dependency       'RNBlur', '~> 4.4.1'
  s.dependency       'RNSlider', '~> 4.5.5'
  s.dependency       'RNPicker', '~> 2.11.0'
  s.dependency       'RNDatePicker', '~> 5.0.10'
  s.dependency       'RNFastShadow', '~> 0.1.1'
  s.dependency       'RNLinearGradient', '~> 2.8.3'
  s.dependency       'RNSafeAreaContext', '~> 5.2.0'
  s.dependency       'RNSVG', '~> 15.11.1'
  s.dependency       'RNUnistyles', '~> 2.20.0'
end
