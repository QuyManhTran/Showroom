'use client';
import Modal from '@/components/Modal';
import CarInfor from '../../infor/[name]/page';
import { useRouter } from 'next/navigation';
import { CarData } from '../../../../../types';

export default function CarView({
  params,
  searchParams,
}: {
  params: string;
  searchParams: CarData;
}) {
  const router = useRouter();
  const onCloseModal = () => {
    router.back();
  };
  return (
    <Modal onClick={onCloseModal}>
      <CarInfor car={searchParams}></CarInfor>
    </Modal>
  );
}
