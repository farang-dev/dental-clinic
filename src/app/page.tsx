'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Phone, Mail, MapPin, Clock, Star, Heart, Shield, Users } from 'lucide-react';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-white/20 shadow-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">スマイル歯科クリニック</h1>
                <p className="text-sm text-blue-600">あなたの笑顔を大切に</p>
              </div>
            </motion.div>
            
            <motion.nav 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:flex space-x-8"
            >
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
                診療内容
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#doctors" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
                医師紹介
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#access" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
                アクセス
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
                お問い合わせ
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </motion.nav>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Phone className="w-4 h-4 mr-2" />
                予約する
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.header>

      <script src="https://chat-fkm8cdt6n-farangdevs-projects.vercel.app/api/embed/0d05d582-c28e-429b-9b26-dc80a07d7ea2.js" async />

      {/* Hero Section */}
      <motion.section 
        className="relative py-20 pt-32 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                地域密着型の歯科医院
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                健康な歯で<br />
                <span className="text-blue-600">美しい笑顔</span>を
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                最新の設備と豊富な経験を持つ医師が、
                患者様一人ひとりに最適な治療をご提供いたします。
                痛みの少ない治療で、安心してお任せください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Phone className="w-5 h-5 mr-2" />
                  今すぐ予約
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  診療内容を見る
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Heart className="w-16 h-16 text-blue-600" />
                  </div>
                  <p className="text-blue-800 font-medium">写真をここに配置</p>
                  <p className="text-blue-600 text-sm">クリニック外観・内観</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              診療内容
            </Badge>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              幅広い診療で<span className="text-blue-600">お口の健康</span>をサポート
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              一般歯科から専門的な治療まで、患者様のニーズに合わせた最適な治療をご提供いたします。
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Shield,
                title: "一般歯科",
                description: "虫歯治療、歯周病治療など基本的な歯科治療を丁寧に行います。予防歯科にも力を入れています。",
                features: ["虫歯治療", "歯周病治療", "予防歯科", "定期検診"]
              },
              {
                icon: Star,
                title: "審美歯科",
                description: "美しい歯並びと白い歯で、自信に満ちた笑顔をサポートします。",
                features: ["ホワイトニング", "セラミック治療", "歯列矯正", "インプラント"]
              },
              {
                icon: Users,
                title: "小児歯科",
                description: "お子様が安心して治療を受けられるよう、優しく丁寧な診療を心がけています。",
                features: ["フッ素塗布", "シーラント", "歯磨き指導", "定期検診"]
              }
            ].map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-blue-100">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              医師紹介
            </Badge>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              経験豊富な<span className="text-blue-600">専門医</span>が在籍
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              患者様に安心していただけるよう、豊富な経験と確かな技術を持つ医師が治療にあたります。
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {[
              {
                name: "田中 太郎",
                title: "院長・歯科医師",
                specialties: ["一般歯科", "インプラント", "審美歯科"],
                experience: "歯科医師歴20年",
                education: "東京歯科大学卒業",
                message: "患者様一人ひとりに寄り添い、最適な治療をご提供いたします。お気軽にご相談ください。"
              },
              {
                name: "佐藤 花子",
                title: "副院長・歯科医師",
                specialties: ["小児歯科", "予防歯科", "歯周病治療"],
                experience: "歯科医師歴15年",
                education: "日本大学歯学部卒業",
                message: "特にお子様の治療を得意としています。怖がらずに治療を受けていただけるよう心がけています。"
              }
            ].map((doctor, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-white border-blue-100">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4">
                      <Avatar className="w-24 h-24 mx-auto">
                        <AvatarImage src="" alt={doctor.name} />
                        <AvatarFallback className="bg-blue-100 text-blue-600 text-lg font-semibold">
                          {doctor.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="mt-2 text-center">
                        <p className="text-blue-600 text-sm">写真をここに配置</p>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-gray-900">{doctor.name}</CardTitle>
                    <CardDescription className="text-blue-600 font-medium">
                      {doctor.title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">専門分野</h4>
                      <div className="flex flex-wrap gap-2">
                        {doctor.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-blue-100 text-blue-800">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p><span className="font-medium">経歴:</span> {doctor.experience}</p>
                      <p><span className="font-medium">出身:</span> {doctor.education}</p>
                    </div>
                    <p className="text-sm text-gray-700 italic">
                       &ldquo;{doctor.message}&rdquo;
                     </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Access Section */}
      <section id="access" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              アクセス・診療時間
            </Badge>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">アクセス良好</span>で通いやすい立地
            </h3>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-blue-100">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-gray-900">
                    <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                    アクセス情報
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">住所</h4>
                    <p className="text-gray-600">〒123-4567<br />東京都渋谷区○○町1-2-3 ○○ビル2F</p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">最寄り駅</h4>
                    <p className="text-gray-600">JR山手線「○○駅」徒歩3分<br />東京メトロ「○○駅」徒歩5分</p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">駐車場</h4>
                    <p className="text-gray-600">専用駐車場3台完備<br />近隣コインパーキングもご利用いただけます</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-blue-100">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-gray-900">
                    <Clock className="w-5 h-5 mr-2 text-blue-600" />
                    診療時間
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="font-semibold text-gray-900">曜日</div>
                      <div className="font-semibold text-gray-900">午前</div>
                      <div className="font-semibold text-gray-900">午後</div>
                      
                      <div className="text-gray-600">月・火・水・金</div>
                      <div className="text-gray-600">9:00-13:00</div>
                      <div className="text-gray-600">14:30-19:00</div>
                      
                      <div className="text-gray-600">土曜日</div>
                      <div className="text-gray-600">9:00-13:00</div>
                      <div className="text-gray-600">14:30-17:00</div>
                      
                      <div className="text-red-600">木・日・祝</div>
                      <div className="text-red-600 col-span-2">休診</div>
                    </div>
                    <Separator />
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>予約制</strong>です。お電話またはWebからご予約ください。<br />
                        急患の方はお電話でご相談ください。
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Card className="border-blue-100">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 h-64 flex items-center justify-center rounded-lg">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <p className="text-blue-800 font-medium">地図をここに配置</p>
                    <p className="text-blue-600 text-sm">Google Maps埋め込み</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              ご予約・お問い合わせ
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              お気軽にお電話またはWebからご予約ください
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Phone className="w-8 h-8 mx-auto mb-4 text-blue-200" />
                  <h4 className="text-xl font-semibold mb-2">お電話でのご予約</h4>
                  <p className="text-3xl font-bold mb-2">03-1234-5678</p>
                  <p className="text-blue-200 text-sm">受付時間: 診療時間内</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 mx-auto mb-4 text-blue-200" />
                  <h4 className="text-xl font-semibold mb-2">メールでのお問い合わせ</h4>
                  <p className="text-lg mb-2">info@smile-dental.jp</p>
                  <p className="text-blue-200 text-sm">24時間受付</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" />
                電話で予約
              </Button>
              <Button size="lg" className="bg-blue-800 text-white hover:bg-blue-900 border border-blue-400 w-full sm:w-auto">
                <Mail className="w-5 h-5 mr-2" />
                Web予約
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">スマイル歯科クリニック</h4>
                  <p className="text-sm text-gray-400">あなたの笑顔を大切に</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                患者様一人ひとりに寄り添い、最適な治療をご提供する地域密着型の歯科医院です。
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">診療内容</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>一般歯科</li>
                <li>小児歯科</li>
                <li>審美歯科</li>
                <li>予防歯科</li>
                <li>インプラント</li>
                <li>ホワイトニング</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">お問い合わせ</h5>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  03-1234-5678
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@smile-dental.jp
                </div>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 mt-0.5" />
                  <span>〒123-4567<br />東京都渋谷区○○町1-2-3</span>
                </div>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="text-center text-sm text-gray-400">
            <p>&copy; 2024 スマイル歯科クリニック. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
